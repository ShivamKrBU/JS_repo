const name = "shivam kumar"
const repoCount = "20"

//console.log(`my name is ${name} and my count is ${repoCount}`);

const gameName = new String('shivam-kumar-05')
//console.log(gameName[0]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.at(-2));
//console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,4)    //substring
console.log(newString)

const anotherString = gameName.slice(-12,5)  //slice
console.log(anotherString);

const newStringOne = "       shivam     "    //trim
//console.log(newStringOne.trim()); //this is use for trim wanted or unwanted string/space/....
//console.log(newStringOne.trimLeft())

const url = "http://shivamkumar%20/shivam.com" //replace
console.log(url.replace('%20', '-'))

console.log(url.includes('shivam')) // use to find any name or char
console.log(url.includes('skdas'))

console.log(gameName.split('-'))