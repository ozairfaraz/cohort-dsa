function isStrongNumber(n) {
    let temp = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        let fact = 1;
        for (let i = 1; i <= digit; i++) {
            fact *= i;
        }
        sum += fact;
        n = Math.floor(n / 10);
    }
    return sum === temp ? "Yes" : "No";
}

module.exports = { isStrongNumber };
