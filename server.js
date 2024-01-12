import express from "express";
import dotenv from "dotenv"; // Import dotenv
dotenv.config(); // Load environment variables from .env file
import OpenAI from "openai";
import cors from "cors";

const app = express();
app.use(express.json()); // Use Express' built-in JSON parser
app.use(cors()); // Enable CORS

const port = process.env.PORT || 4000; // Use the PORT environment variable or default to 3000

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Route for handling completions
app.post('/v1/chat/completions', async (req, res) => {
  try {
    const { message } = req.body;
    // Logging the request body for debugging
    console.log('Request body:', req.body);

    // Check if the message field is present
    if (!message) {
      return res.status(400).send({ error: 'Message field is required' });
    }

    // Make the request to OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": message }],
      temperature: 1,
      max_tokens: 256,
    });

    // Send the response back to the client
    res.send(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: error.message });
  }
});
