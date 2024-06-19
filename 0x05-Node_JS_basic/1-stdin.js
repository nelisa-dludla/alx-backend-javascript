process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const input = data;
  process.stdout.write(`Your name is: ${input}`);
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});

process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
