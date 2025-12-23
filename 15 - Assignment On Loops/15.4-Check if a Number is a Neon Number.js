class Solution {
    is_neon(nStr) {
        let num = Number(nStr);
        let sqNum = num*num;
        let sum = 0;
        while(sqNum>0){
            let lstDig = Math.floor(sqNum%10);
            sum+=lstDig;
            sqNum= Math.floor(sqNum/10);
        }
        if (sum===num) return "Yes";
        return "No";
    }
}

module.exports = Solution;
