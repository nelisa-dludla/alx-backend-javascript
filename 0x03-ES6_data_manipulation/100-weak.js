export const weakMap = new WeakMap();

export function queryAPI(obj) {
  if (weakMap.has(obj)) {
    let count = weakMap.get(obj);

    count += 1;

    weakMap.set(obj, count);

    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(obj, 1);
  }
}
