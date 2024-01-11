const express = require('express');
const app = express();
const fs = require('fs');

// Route to get all people
app.get('/', (req, res) => {
  // Read data from the file
  const data = fs.readFileSync('./data.json');
  const people = JSON.parse(data);
  res.json(people);
});

// Start the server
app.listen(5000, () => {
  console.log(`Server is running on 5000 port`);
});
