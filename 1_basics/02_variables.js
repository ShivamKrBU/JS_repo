const accountId = 456123
let accountEmail = "shivam@gmail.com"
var accountPassword = "1234"
accountCity = "noida"

//accountId = 256 // not allowed

accountEmail = "skdas@gmail.com"
accountPassword = "789456"
accountCity = "jalandhar"



//prefer not to use var
//because of issue in block scope & functional scope



//print all variables statements indivisually

/*
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity); 
*/

//print all variables in one line

console.table([accountId, accountEmail, accountPassword, accountCity]);
