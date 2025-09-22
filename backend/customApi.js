const express = require('express');
const cors = require('cors');
import OpenAI from "openai";
require('dotenv').config();

const app = express();
const PORT = 9876;

app.use(cors());
app.use(express.json());

const client = new OpenAI();

app.get('/api/openai', async (req, res) => {
  const query = req.query.q;
  console.log(`Received query: ${query}`);

  if (!query) {
    return res.json([]);
  }

  try {
    const response = await client.responses.create({
      model: "gpt-5",
      input: query,
    });

    const aiResponse = response.output_text;

    res.json([{ title: query, description: aiResponse }]);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Failed to fetch response" });
  }
});

app.listen(PORT, () => {
  console.log(`Custom backend API server running on http://localhost:${PORT}`);
});
