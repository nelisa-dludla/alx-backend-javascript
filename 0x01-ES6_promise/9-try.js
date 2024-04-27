export default function guardrail(mathFunction) {
  const arr = [];

  try {
    const result = mathFunction();
    arr.push(result);
    arr.push('Guardrail was processed');
  } catch (err) {
    arr.push(`Error: ${err.message}`);
    arr.push('Guardrail was processed');
  }

  return arr;
}
