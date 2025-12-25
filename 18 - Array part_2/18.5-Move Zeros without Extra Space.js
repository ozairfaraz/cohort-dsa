function moveZerosInPlace(arr) {
    let i=0;
    for(let j=0;j<arr.length;j++){
        if (arr[j]===1){
            if (i===j){
                i++;
                continue;
            }
            arr[i]=arr[j];
            arr[j]=0;
            i++;
        }
    }
    return arr;
}

module.exports = { moveZerosInPlace };