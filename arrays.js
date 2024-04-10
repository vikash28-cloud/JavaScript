a1 = [10,20,30,40,50];
a2 = [1,2,3,4,5,6]
a3 = ['a','b','c'];

let ans = a1.concat(a2,a3);

console.log(ans);




// importtant loop 
a1.forEach((value,index,array) => {
    console.log(value,index,array);
});

// loop for printing objects'
let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}

for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key,element);
    }
}

for(const value of a2){
    console.log(value);
}

// map function
// arrayeName.map(  (element)=>{}   )  
// print a1 array square
let newarr = a2.map((value)=>{
    return value**2;
})

console.log(newarr);

// filter function
const greaterThan2=(e)=>{
        if(e>2){
            return true;

        }
        return false;
}
console.log(a2.filter(greaterThan2));