let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());

//let myCreatedDate = new Date(2024, 7, 26)
//let myCreatedDate = new Date(2024, 7, 26, 15, 3, 20)
//let myCreatedDate = new Date("2024-07-15")
let myCreatedDate = new Date("05-12-2024")
//console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); //converte in seconds

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());
//console.log(newDate.getTime());  

//basically use in string interpolation

//console.log(`this month ${newDate.getMonth()+1} my salary credited on the day ${newDate.getDay()+1}`);

console.log(newDate.toLocaleString('default' , {
    weekday: "long",
    month: "2-digit",
}));

console.log(newDate.toLocaleString());
