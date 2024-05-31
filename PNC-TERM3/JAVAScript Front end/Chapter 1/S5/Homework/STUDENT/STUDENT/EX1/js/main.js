let text = "hello world [JavaScript] we [are] strong!";

// TODO: 
// YOUR CODE HERE
let result=""
let isSign=true
for (let i=0; i<text.length; i++){
    if (text[i]=='['){
        isSign=false
    }else if(isSign && text[i]!="]"){
        result+=text[i]
    }else if(text[i]=="]"){
        isSign=true
    }
};
console.log(result);
// output: hello world we strong!


