export default function updateStudentGradeByCity(array, city, newGrades) {
  const arr = array.filter((obj) => obj.location === city);

  const finalArr = arr.map((obj) => {
    const gradeFound = newGrades.find((gradeObj) => gradeObj.studentId === obj.id);
    const objCopy = { ...obj };

    if (gradeFound) {
      objCopy.grade = gradeFound.grade;
      return objCopy;
    }
    objCopy.grade = 'N/A';
    return objCopy;
  });

  return finalArr;
}
