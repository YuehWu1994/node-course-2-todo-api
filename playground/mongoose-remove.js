const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


//Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5bd955498d8d5e3463baff28'}).then((todo) => {

});

Todo.findByIdAndRemove('5bd955498d8d5e3463baff28').then((todo) => {
  console.log(todo);
});
