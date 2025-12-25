function findSecondGreatestElement(arr) {
    let max = Math.max(arr[0],arr[1])
    let sMax = Math.min(arr[0],arr[1])
    for (let i=2;i<arr.length;i++){
        if(arr[i]>max){
            sMax = max;
            max=arr[i];
        }
        if (arr[i]>sMax && arr[i]!=max) sMax=arr[i];
    }
    return sMax;
}

module.exports = { findSecondGreatestElement };