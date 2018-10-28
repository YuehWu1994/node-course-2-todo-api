//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'rex', age: 23};
// // destructoring
// var {name} = user;
// console.log(name);
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('unable to connect to Mongodb server');
  }
  console.log('success to connect to mongodb');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   test: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// db.collection('Users').insertOne({
//   name: 'Rex',
//   age: 23,
//   location: 'Irvine'
// }, (err, result) => {
//   if(err){
//     return console.log('unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
//   console.log(result.ops[0]._id.getTimestamp());
// });

  client.close();
});
