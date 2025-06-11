import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

app.post('/send-email', async (req, res) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const text = await response.text();
    res.send(text);
  } catch (error) {
    res.status(500).send('Error proxy: ' + error.message);
  }
});

app.listen(4000, () => {
  console.log('Proxy start on http://localhost:4000');
});
