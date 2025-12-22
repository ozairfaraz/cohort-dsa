class Solution {
    is_armstrong(nStr) {
        const len = Number(nStr.length);
        let num = Number(nStr);
        const check = num;
        let arm =0;
        while (num>0){
           let lstDig = Math.floor(num%10);
           arm += Math.pow(lstDig,len)
           num = Math.floor(num/10);
        }
        if (arm === check) return "Armstrong";
        else return "Not Armstrong";
    }
}

module.exports = Solution;
