//JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.

/**********Premitive datatype************/

// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const name = "Shivam Kumar"
//console.log(name);           //string   [datatypes- string]

const score = 100
const scoreValue = 100.3     //number     [datatypes- number]

const isLoggedIn = true      //Boolean    [datatypes- boolean]
const outsideTem = null      //null       [datatypes- object]
let userEmail;               //undefined  [datatypes- undefined]

const Id = Symbol('123')     //Symbol-use for unique Id  [datatypes- symbol]
const newId = Symbol('123')   
//console.log(Id == newId);

const bigNumber = 555555555578999n   //bigInt [datatypes- bigInt]
//console.log(bigNumber);



/***********Non-Premitive(Refrence)*************/

//Array,Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];  //Array   [datatypes- Object]

let myObj = {                                   //objects  [datatypes- Object] 
    name: "shivam",
    age: "24",
}

const myFunction = function(){                  //functions [datatypes- fuction Object]
    console.log("hello world");
}


//console.log(typeof bigNumber)






/*************************************************============MEMORY=============*********************************************/
  
// STACK (use in Premitive Datatypes), HEAP(use in Non-Premitive Datatypes)

/*callbyValue ==== In this method, value of actuals parameters are copied to the functional formal parameters 
and stored in different memory location.*/

/*callbyReference ==== In this  method, actual and copied parameters on passing  variables in function, any change made in the passed 
parameter will update the original variables reference too,actual and copied variables are created in same memory location */

/*let myAddress = "auraiya"  //memory store in stack
let newAddress = myAddress
newAddress = "Noida"

console.log(myAddress);       // callByValue
console.log(newAddress); */  

let userOne = {
    email: "shivam@gmail",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "skdas@gmail.com"
console.log(userOne);           // callByReference
console.log(userTwo);           