class Solution {
    is_harshad(nStr) {
        let num = Number(nStr);
        let check = num;
        let sum=0;
        while(num>0){
            let lstDig = num%10;
            sum+=lstDig;
            num=Math.floor(num/10);
        }
        if(check%sum===0) return "Harshad Number";
        else return "Not Harshad Number";
    }
}

module.exports = Solution;
