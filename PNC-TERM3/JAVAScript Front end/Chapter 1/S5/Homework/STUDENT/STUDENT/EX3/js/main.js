let arrOne=[1,3,6,7,9];
let arrTwo=[4,3,5,9,1];
let newArr=[];
for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i]>arrTwo[i]){
        newArr.push(arrOne[i])
    }else if(arrOne[i]<arrTwo[i]){
        newArr.push(arrTwo[i])
    }else if(arrOne[i]==arrTwo[i]){
        newArr.push(arrOne[i])
    }
    
}
console.log(newArr);