function sumUpToN(n) {
    // Write your logic here
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

module.exports = { sumUpToN };