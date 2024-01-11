const express = require('express');
const app = express();
const fs = require('fs');
const port = 5000;

// Route to get all people
app.get('/krasofka', (req, res) => {
  // Read data from the file
  const data = fs.readFileSync('./data.json');
  const people = JSON.parse(data);
  res.json(people);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
