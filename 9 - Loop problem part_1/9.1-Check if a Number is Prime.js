function isPrime(n) {
    // Write your logic here
    if (n<=1) return "Not Prime";
    if (n===2) return "Prime";
    if (n%2===0) return "Not Prime";
    let sqrtN = Math.floor(Math.sqrt(n));
    for(let i=3 ; i<=sqrtN ; i+=2){
        if (n%i===0) return "Not Prime";
    }
    return "Prime";
    // because a odd prime number has no divisors between 3 and sqrt(n)
}

module.exports = { isPrime };