export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const arr = array.map((obj) => obj.id);

  return arr;
}
