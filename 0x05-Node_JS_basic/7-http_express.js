const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

// Async helper function
async function getConsoleOutput(func, path) {
  const originalConsoleLog = console.log;
  const output = [];

  console.log = (message) => output.push(message);

  await func(path);

  console.log = originalConsoleLog;
  return output.join('\n');
}

// Root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
// Student route
app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    res.send('This is the list of our students\n');

    const output = await getConsoleOutput(countStudents, databasePath);
    res.send(output);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(port);
