function calculateCompoundInterest(P, r, t, n) {
  // Write your logic here
  let A = P * Math.pow(1 + r / n, n * t);
  let CI = A - P;
  return CI.toFixed(2);
}

module.exports = { calculateCompoundInterest };
