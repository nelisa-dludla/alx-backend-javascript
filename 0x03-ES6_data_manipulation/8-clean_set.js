export default function cleanSet(setObj, startString) {
  let str = '';

  if (startString === '') {
    return str;
  }

  for (const item of setObj) {
    const startStringLength = startString.length;
    if (item.slice(0, startStringLength) === startString && str === '') {
      str += `${item.slice(startStringLength)}`;
    } else if (item.slice(0, startStringLength) === startString && str !== '') {
      str += `-${item.slice(startStringLength)}`;
    }
  }

  return str;
}
