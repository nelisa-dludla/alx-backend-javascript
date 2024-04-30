export default function getStudentsByLocation(array, city) {
  const arr = array.filter((obj) => obj.location === city);

  return arr;
}
