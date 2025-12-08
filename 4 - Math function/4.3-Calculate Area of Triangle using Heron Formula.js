function calculateTriangleArea(a, b, c) {
    // Write your logic here
    const s = (a+b+c)/2;
    const A = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return (A.toFixed(2));
}

module.exports = { calculateTriangleArea };