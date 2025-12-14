function printFactors(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) str += i + " ";
    }
    process.stdout.write(str);
}

module.exports = { printFactors };
