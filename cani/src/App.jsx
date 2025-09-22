import { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onstart = () => setListening(true);
      recognitionRef.current.onend = () => setListening(false);
      recognitionRef.current.onerror = (event) => {
        setError("Voice recognition error: " + event.error);
        setListening(false);
      };
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearch(transcript);
        setError(null);
      };
    } else {
      setError("Speech Recognition API not supported in this browser.");
    }
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) {
      setError("Please enter a search query.");
      return;
    }
    setLoading(true);
    setError(null);
    setResults(null);
    try {
      const response = await fetch(
        "http://localhost:9876/api/openai?q=" + encodeURIComponent(search)
      );
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      setResults(data); // expects an array of {title, description}
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleVoice = () => {
    if (recognitionRef.current) {
      if (listening) {
        recognitionRef.current.stop();
      } else {
        setError(null);
        recognitionRef.current.start();
      }
    } else {
      setError("Speech Recognition not supported.");
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1 className="title">What CaNi do for you?
        </h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type your query..."
          />
          <button className="search-button" type="submit" disabled={loading}>
            Search
          </button>
          <button
            className={`voice-button${listening ? " listening" : ""}`}
            type="button"
            onClick={handleVoice}
            aria-label="Voice Search"
          >
            {/* SVG Microphone Icon */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="7" y="4" width="8" height="12" rx="4" stroke="#00D7FF" strokeWidth="2"/>
              <line x1="11" y1="18" x2="11" y2="21" stroke="#00D7FF" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="21" x2="14" y2="21" stroke="#00D7FF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </form>
        {error && <div className="feedback"><p>{error}</p></div>}
        {loading && <div className="feedback"><p>Loading...</p></div>}
        {results && <SearchForm results={results} />}
      </main>
    </div>
  );
}

export default App;