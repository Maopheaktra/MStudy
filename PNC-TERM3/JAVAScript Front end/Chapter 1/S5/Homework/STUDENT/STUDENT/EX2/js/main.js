let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let sum=0
let isStart=false

for (let i=0; i<numbers.length;i++){
    if (numbers[i]==1 && !isStart){
        isStart=true
    }else if (numbers[i]==0){
        isStart=false
    }else if (isStart){
        sum+=numbers[i]
    }
};
console.log(sum);
// output: 14 becuase 3 + 5 + 1 + 2 + 3





