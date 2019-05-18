var express = require('express');
var router = express.Router();
var async = require('async');
var mongoose = require('mongoose');
//var Promise = require('promise');
var Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.find({}, function(err, todos) {
    if (err) return res.render('error', {message:err.message, error:{}});
    var result = [];
    /*
    todos.forEach((todo) => {
      var now = new Date();
      var td = todo.toObject();
      td.expired = false;
      if (now.getTime() - td.dueDate.getTime() <= 0)
        td.expired = true;
      result.push(td);
    });*/
    res.render('index', todos);
  });
});
/*
router.get('/', function(req, res, next) {
  Todo.find({}, function(err, todos) {
    if (err) return res.render('error', {message: err.message,error: {}});
    var result = [];
    todos.forEach((todo) => {
      var now = new Date();
      var td = todo.toObject();
      td.expired = false;
      if (now.getTime() - td.dueDate.getTime() <= 0)
        td.expired = true;
      result.push(td);
    });
    res.render('index', result);
  }
});*/
/*
router.post('/todo', function(req, res, next) {
  var todo = new Todo({
    'title':req.body.title,
    'content':req.body.content,
    'priority':req.body.priority,
    'done':req.body.done});
  todo.save(async function(err, todo) {
    if (req.body.dueDate != undefined)
      await Todo.findOneAndUpdate({'_id':todo._id}, {$addToSet:{'dueDate':req.body.dueDate}});
    return res.json({'todo':todo});
  });
});

router.put('/todo', async function(req, res, next) {
  await Todo.findOneAndUpdate(
    {'_id':req.body.todoId},
    {$set:{'title':req.body.title,
           'content':req.body.content,
           'priority':req.body.priority,
           'done':req.body.done}});
  return res.json({'message':'modify success'});
});

router.delete('/todo', async function(req, res, next) {
  await Todo.deleteOne({'_id':req.body.todoId});
  return res.json({'message':'delete success'});
});*/
module.exports = router;
