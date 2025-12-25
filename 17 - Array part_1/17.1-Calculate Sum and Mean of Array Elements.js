function calculateSumAndMean(arr, n) {
    n = Number(n);
    let sum=0;
    for(let i=0;i<n;i++){
        sum+=Number(arr[i]);
    }
    let mean = (sum/n).toFixed(1);
    return [sum,mean];
}

module.exports = { calculateSumAndMean };