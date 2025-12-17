function isAutomorphic(n) {
    // Write your logic here
    let mul = n*n;
    nLen = n.toString().length;
    let check = "";
    while (nLen>0){
        let lstDig = mul%10;
        check=lstDig+check;
        mul = Math.floor(mul/10);
        nLen--;
    }
    if (check==n) return "Yes";
    else return "No";
}

module.exports = { isAutomorphic };