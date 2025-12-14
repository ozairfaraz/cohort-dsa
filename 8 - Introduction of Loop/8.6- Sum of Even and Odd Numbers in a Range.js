function sumEvenOddInRange(start, end) {
    // Write your logic here
    let even=0 , odd=0;
    if(end<start){
        start=start+end;
        end=start-end;
        start=start-end;
    }
    for(let i=start;i<=end;i++){
        if(i%2==0) even+=i;
        else odd+=i;
    }
    return [even,odd];
}

module.exports = { sumEvenOddInRange };