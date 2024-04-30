export default function getStudentIdsSum(array) {
  const sum = array.reduce(
    (accumulator, obj) => accumulator + obj.id, 0,
  );

  return sum;
}
