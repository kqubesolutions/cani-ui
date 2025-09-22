const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.get("/api/openai", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }
  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: query }],
        max_tokens: 200,
      }),
    });
    const data = await openaiRes.json();
    const answer = data.choices?.[0]?.message?.content || "No response.";
    // Format as array for your frontend
    res.json([{ title: "OpenAI Response", description: answer }]);
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(9876, () => {
  console.log("API server running on http://localhost:9876");
});
