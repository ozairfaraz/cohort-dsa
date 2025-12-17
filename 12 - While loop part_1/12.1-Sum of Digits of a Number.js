function sumOfDigits(n) {
    // Write your logic here
    let sum=0;
    while(n>0){
        sum = sum + (n%10);
        n = Math.floor(n/10);
    }
    return sum;
}

module.exports = { sumOfDigits };