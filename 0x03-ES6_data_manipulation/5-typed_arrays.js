export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const uint8Arr = new Uint8Array(buffer);

  if (position < 0 || position > length) {
    throw Error('Position outside range');
  } else {
    uint8Arr[position] = value;
  }

  const dataView = new DataView(buffer);

  return dataView;
}
