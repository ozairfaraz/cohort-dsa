function printNto1(n) {
  // Write your logic here
  for (let i = n; i >= 1; i--) {
    process.stdout.write(i.toString() + " ");
  }
}

module.exports = { printNto1 };
