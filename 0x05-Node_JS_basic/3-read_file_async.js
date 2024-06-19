const fs = require('fs/promises');

function countStudents(file) {
  return fs.readFile(file, 'utf-8')
    .then((data) => {
      let rows = data.split('\n').map((line) => {
        if (line.trim()) {
          return line.split(',');
        }
        return null;
      });

      // Clean rows and print number of students
      rows = rows.filter((row) => row);
      const numberOfStudents = rows.length - 1;
      console.log(`Number of students: ${numberOfStudents}`);

      const fieldData = {
        CS: [],
        SWE: [],
      };

      // Get student names for each field
      rows.forEach((row) => {
        if (row[3] === 'CS') {
          fieldData.CS.push(row[0]);
        } else if (row[3] === 'SWE') {
          fieldData.SWE.push(row[0]);
        }
      });
      // Print string
      for (const field of Object.keys(fieldData)) {
        const listString = fieldData[field].toString().replaceAll(',', ', ');

        console.log(`Number of students in ${field}: ${fieldData[field].length}. List: ${listString}`);
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
