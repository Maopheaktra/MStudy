// function substact(sum1,sum2){
//     return sum1+sum2
// };
// console.log(sum(2,3));

// arrow function(=>)

// let sum = (num1,num2)=> num1+num2;

// console.log(sum(2,3));

let numbers= [10,10,2,10]  //32

//1 express function or normal function

function total(numbers){
    let sum=0
    for (const number of numbers) {
        sum+=number
    }
    return sum
};
console.log(total(numbers));

//arrow function

let total=numbers=> {
    let sum=0
    for (const number of numbers) {
        sum+=number
    }
    return sum
}
console.log(total(numbers));