//Array
const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktimaan","doga","naagraj"]

//console.log(myArr[1]);

const myArr2 = new Array(0,1,3,4)
myArr2.push(2)       //insert the elements in arr[]
//myArr2.unshift(5)  //insert 5 index[0]
//myArr2.shift()     //remove first element in arr[]
//myArr2.fill(10)    //fill all arr[] element by 10
myArr2.sort()        //sort the arr[]

const mixArr = myArr2.concat([5,6]) //combine 2 arr[]
//console.log(mixArr);
             /*OR*/
//console.log(myArr2.concat([5,6]));


//myArr2.reverse()  //reverse the whole index of arr[]
//myArr2.pop()      //remove last index of arr[]

//console.log(myArr2.map((num)=>Math.pow(num,2)));  //square of the all elements of the arr[]

//console.log(myArr2);
//console.log(typeof myArr2); //typeof -- object

//console.log(myArr2.at(1)); // which elements is at which index position in arr[]
//console.log(myArr2.indexOf(3));
//console.log(myArr2.includes(2)); //check the arr[] and find the value is present or not

//const newArr2 = myArr2.join() // arr[] element change into string
//console.log(typeof newArr2);  //type of -- string
//console.log(newArr2);

// slice, splice
//console.log("A" , myArr2);
const newArr3 = myArr2.slice(1,4) //In slice - doesn't include the range
//console.log(newArr3);

//console.log("A1" , myArr2);

//console.log("B" , myArr2);
const newArr4 = myArr2.splice(1,4) //In splice - include the range
//console.log(newArr4);


//console.log("C" , myArr2);
//console.log(newArr4);



/*************Combine Two arr[]***********/

const indian_heros = ["shaktimaan","doga","naagraj"]
const marval_heros = ["ironman","hulk","thor","antman","loki"]
const dc_heros = ["superman","wonderwoman","flash","batman"]

/*marval_heros.push(dc_heros)
console.log(marval_heros);
console.log(marval_heros[5][1]);*/

//const all_heros = marval_heros.concat(dc_heros,indian_heros)   //concat operater - use to combine the all arr[]
//

const all_heros = [...indian_heros,...marval_heros,...dc_heros]   //spread operater
//console.log(all_heros);

const anotherArr = [1,4,8,6,[4,5,6],5,8,[1,9,[1,8,6]]]
const anotherArr1 = anotherArr.flat(Infinity)
//console.log(anotherArr1)


console.log(Array.isArray("shivam"));
console.log(Array.from("shivam"));       //string convert into array
//console.log(Array.from({name: "shivam"})); //interesting case**

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));    