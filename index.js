const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./db');

// Serve HTML Form
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Coding Cloud</h1>
    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Your Name" required /><br/>
      <input type="email" name="email" placeholder="Your Email" required /><br/>
      <input type="text" name="course" placeholder="Course Interested" required /><br/>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle Form Submission
app.post('/submit', (req, res) => {
  const { name, email, course } = req.body;
  const query = `INSERT INTO enquiry (name, email, course) VALUES (?, ?, ?)`;
  db.query(query, [name, email, course], (err) => {
    if (err) {
      console.error(err);
      res.send('Error saving data');
    } else {
      res.send('Thanks for your enquiry!');
    }
  });
});

app.listen(3000, () => {
  console.log('Node app running at http://localhost:3000');
});
