function calculateFinalAmount(amount) {
    // Write your logic here
    if (amount<=5000) return amount;
    else if (amount>=5001 && amount<=7000) return 0.95*amount;
    else if (amount>=7001 && amount<=9000) return 0.90*amount;
    else return amount*0.80;
    
}

module.exports = { calculateFinalAmount };