const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
}


var token = jwt.sign(data, '1234abc') 
console.log(token);

var decoded = jwt.verify(token, '1234abc')
console.log(decoded)
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`)
// console.log(`Has: ${hash}`)