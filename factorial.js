// Calculating Factoial using js

let num = 5;
const factorial=(num)=>{
    let fact=1;
    if(num===0){
        return 1;
    }
    for(let i=1;i<=num;i++){
        fact = fact*i;
    }
    return fact;
}

console.log(factorial(num));

function fact(num){
    if(num==1){
        return newFunction();
    }
    return num*fact(num-1);
    

    function newFunction() {
        return 1;
    }
}

console.log(fact(num));