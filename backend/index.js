const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/tasks', (req, res) => {
  const { title, due_date, priority } = req.body;
  db.query('INSERT INTO tasks (title, due_date, priority) VALUES (?, ?, ?)', [title, due_date, priority], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, title, due_date, priority });
  });
});

app.delete('/tasks/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
