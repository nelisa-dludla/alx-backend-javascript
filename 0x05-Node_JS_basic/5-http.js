const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url);
  const path = reqUrl.pathname;

  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (path === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];
    const originalConsoleLog = console.log;
    const logOutput = [];

    console.log = (message) => {
      logOutput.push(message);
    };

    countStudents(databasePath)
      .then(() => {
        res.end(logOutput.join('\n'));
        console.log = originalConsoleLog;
      })
      .catch((err) => {
        res.end(err);
        console.log = originalConsoleLog;
      });
  }
});

app.listen(port, host);

module.exports = app;
