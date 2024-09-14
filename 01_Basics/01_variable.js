const accountId = 144553

let accountEmail = "ashish@gmail.com"

var accountPassword = "12345"
let accountState;
accountCity = "miraj"
//accountId = 2 not allowed 

accountEmail = "hc@hc.com"
accountPassword = "2121211"

accountCity = "sangli"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])