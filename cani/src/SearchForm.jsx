import React, { useState }from "react";

const RESULTS_PER_PAGE = 5;

const SearchForm = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!results || results.length === 0) {
    return <p style={{ color: "#ccc", textAlign: "center" }}>No results found.</p>;
  }

  const totalPages = Math.ceil(results.length / RESULTS_PER_PAGE);

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const currentResults = results.slice(startIndex, startIndex + RESULTS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="results-container">
      {currentResults.map((item, index) => (
        <div key={startIndex + index} className="result-item">
          <h3>{item.title || "No Title"}</h3>
          <p>{item.description || "No description available."}</p>
        </div>
      ))}

      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "12px",
          }}
        >
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          >
            Prev
          </button>
          <span style={{ color: "#00D7FF" }}>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchForm;