const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// })

Todo.findOneAndRemove('5924b638a7c821c0aa295fa4').then((todo)=>{
  console.log(todo);
})