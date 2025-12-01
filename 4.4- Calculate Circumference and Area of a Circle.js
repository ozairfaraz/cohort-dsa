function calculateCircleProperties(r) {
  // Write your logic here
  const Pi = Math.PI;
  const C = (2 * Pi * r).toFixed(2);
  const A = (Pi * (r * r)).toFixed(2);
  return [C, A];
}
module.exports = { calculateCircleProperties };
