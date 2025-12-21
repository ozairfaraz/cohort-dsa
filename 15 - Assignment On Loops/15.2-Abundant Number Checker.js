class Solution {
    is_abundant(nStr) {
        let num = Number(nStr);
        let sum = 0;
        for (let i=1;i<num;i++){
            if(num%i===0) sum+=i;
        }
        if (sum>num) return "Yes";
        else return "No";
    }
}

module.exports = Solution;
