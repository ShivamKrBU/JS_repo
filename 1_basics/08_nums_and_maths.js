const score = 400

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);

//console.log(balance.toFixed(2));

const otherNumber = 123.895
console.log(otherNumber.toPrecision(4));
console.log(Math.floor(otherNumber));
console.log(Math.round(otherNumber));




const thousands = 100000000
//console.log(thousands.toLocaleString('en-IN'));



/***************************===================MATHS================************************/


///console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//console.log(Math.ceil(4.6));
//console.log(Math.floor(4.9));
/*console.log(Math.min(4,8,9,10));
console.log(Math.max(8,9,10,7,6));*/

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 200

console.log(Math.floor(Math.random()*(max-min+1))+min);