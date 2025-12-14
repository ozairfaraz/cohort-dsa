function factorial(n) {
    // Write your logic here
    let factorial=1;
    for(let i=n;i>=0;i--){
        if(i===0) break;
        factorial=factorial*i;
    }
    return factorial;
}

module.exports = { factorial };