export default function createIteratorObject(report) {
  const arr = [];

  for (const department in report.allEmployees) {
    const employees = report.allEmployees[department];
    for (const employee of employees) {
      arr.push(employee);
    }
  }
  return arr;
}
