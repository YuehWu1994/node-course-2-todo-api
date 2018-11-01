const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123455');
//console.log(token);
var decode = jwt.verify(token,'123455');
console.log(decode);




// var message = "I am user 234";
// var hash = SHA256(message);
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// var resultHash = SHA256(JSON.stringify(data) + 'someSecret').toString();
// if(resultHash === token.hash){
//   console.log("data was not changed");
// }else{
//   console.log("data was changed, don't trust");
// }
