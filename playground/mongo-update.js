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
  // deleteMany
  // db.collection('Todos').findOneAndUpdate({
  //   _id : new ObjectID('5bd564fb3dd9c694158b1b47'),
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5bd55454a578381ae7ef890b'),
  }, {
    $set: {
      name: 'rex'
    },
    $inc: {
      age: -17
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  // db.close();
});
