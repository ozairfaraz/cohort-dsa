function reverseNumber(n) {
    // Write your logic here
    let rev = 0;
    while(n>0){
        let lstDig = n%10;
        rev=(rev*10)+lstDig;
        n=Math.floor(n/10);
    }
    return rev;
}

module.exports = { reverseNumber };