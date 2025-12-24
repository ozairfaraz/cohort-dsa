function findGreatestElementAndIndex(arr) {
    let max=arr[0];
    let idx=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max) {
            max=arr[i];
            idx=i;            
        }
    }
    return [max,idx];
    
}

module.exports = { findGreatestElementAndIndex };