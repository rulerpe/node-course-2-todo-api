var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoogse} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  })
})

app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  },(e)=>{
    res.status(400).send(e);
  })
})

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  //404
  //find by id
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
  res.send({todo});
  }).catch((e)=>{
    return res.status(400).send(e);
  })
  //success
  //if todo send back
  //if not send back 404
  //error
  //400
  //res.send(req.parms.id);
})

app.listen(3000, ()=>{
  console.log('Started on port 3000')
});

module.exports = {app};