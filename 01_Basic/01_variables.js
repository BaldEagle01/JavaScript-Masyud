const accountId = 1245
let accountEmail = "masyud@google.com"
var accountPassword = "123456"
accountCity = "Bengaluru"
let accountState;

// accountId = 124 // not allowed

accountEmail = "ain@go.com"
accountPassword = "65447"
accountCity = "Kolkata"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);