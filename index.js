const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 5000;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_results'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

app.get('/results/:symbolNo', (req, res) => {
  const symbolNo = req.params.symbolNo;
  db.query('SELECT * FROM results WHERE symbol_no = ?', [symbolNo], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
