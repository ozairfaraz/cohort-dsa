function printFactors(n) {
    let str = "";
    for (let i = 1; i <= n/2; i++) {
        if (n % i === 0) str += i + " ";
    }
    process.stdout.write(str+n.toString());
}

module.exports = { printFactors };
