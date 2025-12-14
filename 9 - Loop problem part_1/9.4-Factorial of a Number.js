class Solution {
    factorial(nStr) {
        // Write your code here
        let fact=1;
        for(let i=2; i<=Number(nStr); i++){
            fact=fact*i;
        }
        return fact;
    }
}

module.exports = Solution;
