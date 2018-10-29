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
  db.collection('Users').deleteMany({age: 24}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5bd553049070ef1ad0900413")
    }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })
  // db.close();
});
