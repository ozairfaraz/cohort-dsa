function findGreatest(a, b, c) {
    // Write your logic here
    if ((a>=b) && (a>=c)) return a;
    else if ((b>=a) && (b>=c)) return b;
    else return c;
}
module.exports = { findGreatest };