// Function 1 (the avg)
function averageNum(num1, num2) {
  return (num1 + num2) / 2;
}
console.log("test function1:", averageNum(4, 6));

// Function 2 (as example)
// TODO
function average(num1,num2){
  return (num1+num2)/2
}
console.log("test function2:",average(14,16));

// Function 3 (as example)
// TODO
function merge(string1,string2){
  return string1+string2
}
console.log("test function:",merge("ronan"," the best"));

// Function 4 (as example)
// TODO
numbers=[4,4,3,4]
function equal(numbers){
  isEqual=false
  isSame=true
  let i=0
  while (i<numbers.length && isSame){
    if (numbers[0]==numbers[i]){
      isEqual=true
    }else{
      isSame=false
      isEqual=false
    }
    i+=1
  }
  return isEqual
};
console.log("test function4:", equal(numbers));
// Function 5 (as example)
// TODO
let students={name:"Pheaktra",age:13}
console.log("test function5:",'student '+ students.name +' is ' + students.age);

// Function 6 (as example)
// TODO
let string1="Pheaktra"
let string2="Leap"
let islonger=false
function longer(string1,string1) {
    if (string1.length>string2.length) {
      islonger=true
    }
  return islonger
}
console.log("test function6:",longer(string1,string2));

// Function 7 (as example)
// TODO
let N=[10,10,20,30]

function sumNumber(N) {
  let sum=0
  for (const index of N) {
    sum+=index
  }
  return sum
};
console.log("test function7:",sumNumber(N));

// Function 8 (as example)
// TODO

let row=2
let column=3

function sum(row,column) {
  let array2D=[]
  for(let i=0;i<row;i++){
    let array=[]
    for (let j=0;j<column;j++){
      array.push(0)
    }
    array2D.push(array)
  }
  return array2D
}
console.log("test function8:",sum(row,column));


// Function 9 (as example)
// TODO

let arr1=[1,2,3]
let arr2=[4,4,4]
let newArr=[]
function Add(arr1,arr2) {

  for (let i in arr1){
    let sum=0
    sum=arr1[i]+arr2[i]
    newArr.push(sum)
  }
  return newArr
}
console.log("test function9:",Add(arr1,arr2));