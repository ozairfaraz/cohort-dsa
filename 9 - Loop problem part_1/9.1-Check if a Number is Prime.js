function isPrime(n) {
    // Write your logic here
    let flg=0;
    for(let i=1; i<=n/2; i++){
        if (n%i==0) flg++;
    }
    if (flg===1) return "Prime";
    else return "Not Prime";
    
}

module.exports = { isPrime };