// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");
app.use(cors());
app.use(express.json());




const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "email_db",
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});
app.post('/api/save-email', (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).send('Email is required');

  const query = 'INSERT INTO emails (email) VALUES (?)';
  db.query(query, [email], (err, result) => {
    if (err) {
      console.error('Error saving email:', err);
      return res.status(500).send('Database error');
    }
    res.send('Email saved successfully');
  });
});
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  
  const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ success: true, id: result.insertId });
  });
});
app.get('/api/convert', async (req, res) => {
  const { from, to, amount } = req.query;
  try {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/8b5e8fc1c2091586ede5df54/latest/${from}`);
    const rate = response.data.conversion_rates[to];
    const convertedAmount = (amount * rate).toFixed(2);
    res.json({ convertedAmount });
  } catch (err) {
    res.status(500).json({ error: 'Conversion failed' });
  }
});
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password], (err) => {
    if (err) return res.status(500).send("DB Error");
    res.status(200).send("User signed in successfully");
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
 