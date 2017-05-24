const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

// bcrypt.genSalt(10,(err,salt) =>{
//   bcrypt.hash(password, salt,(er,hash)=>{
//     console.log(hash);
//   })
// })

var hashedPassword = '$2a$10$VfJYHTvF/9vhSoXUWK7qV.OZQm1P0JZj.h98TzrcBIhhvrwZXQP9.';
bcrypt.compare(password,hashedPassword,(err,res)=>{
  console.log(res);
})

// var data = {
//   id: 10
// }


// var token = jwt.sign(data, '1234abc') 
// console.log(token);

// var decoded = jwt.verify(token, '1234abc')
// console.log(decoded)
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`)
// console.log(`Has: ${hash}`)