function calculateCompoundInterest(P, r, t, n) {
  // Write your logic here
  const A = P * Math.pow(1 + r / n, n * t);
  const Ci = A - P;
  return Ci.toFixed(2);
}
module.exports = { calculateCompoundInterest };
