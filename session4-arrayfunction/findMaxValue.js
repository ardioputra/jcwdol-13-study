function findMaxValue(arrInput){
    let maxValue = 0;
    for(let i = 0; i<arrInput.length; i++){
        console.log(maxValue)
        if(maxValue<arrInput[i]){
            maxValue = arrInput[i]
        }
        console.log(maxValue);
    }
    return maxValue;
}

console.log(findMaxValue([2,3,4,5,6,73,32,35,13,512,45,65]))