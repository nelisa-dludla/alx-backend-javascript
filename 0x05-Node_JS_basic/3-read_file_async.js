const fs = require('fs/promises');

function countStudents(file) {
  return fs.readFile(file, 'utf-8')
    .then((data) => {
      const rows = data.split('\n').filter(line => line.trim());

      if (rows.length <= 1) {
        console.log('Number of students: 0');
        return;
      }

      const header = rows.shift();
      const numberOfStudents = rows.length;
      console.log(`Number of students: ${numberOfStudents}`);

      const fieldData = {};

      rows.forEach((row) => {
        const studentData = row.split(',');
        const field = studentData[3];
        const firstName = studentData[0];

        if (!fieldData[field]) {
          fieldData[field] = [];
        }
        fieldData[field].push(firstName);
      });

      // Print string
      for (const field in fieldData) {
        const listString = fieldData[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldData[field].length}. List: ${listString}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
