function printNaturalNumbers(n) {
    // Write your logic here
    for(let i=1;i<=n;i++){
        process.stdout.write(i.toString()+" ");
    }
}

module.exports = { printNaturalNumbers };