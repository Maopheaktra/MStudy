// case 1:
let arr = [1, 3, 6, 7, 9];
// TODO: 
// YOUR CODE HERE
let newArr=[]
for (let i=0; i<arr.length; i++){
    if (arr[i]<5){
        newArr.push(arr[i]+(9-arr[i]))
    }else{
        newArr.push(arr[i])
    }
};
console.log(newArr);
// output: [9, 9, 6, 7, 9]

