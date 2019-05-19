var express = require('express');
var router = express.Router();
var async = require('async');
var mongoose = require('mongoose');
var Promise = require('promise');
var Todo = require('../models/todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.find({}, function(err, todos) {
    if (err) return res.render('error', {message:err.message, error:{}});
    var result = [];
    var expired = [];
    todos.forEach((todo) => {
      var now = new Date();
      var td = todo.toObject();
      if (td.dueDate!=undefined && now.getTime() - td.dueDate.getTime() >= 0)
        expired.push(td);
      td.date = formatDate(td.dueDate);
      result.push(td);
    });
    res.render('index', {result:result, expired:expired});
  });
});

router.post('/todo', function(req, res, next) {
  var todo = new Todo({
    'title':req.body.title,
    'content':req.body.content,
    'priority':req.body.priority,
    'done':"0"
  });

  todo.save(async function(err, todo) {
    if (req.body.dueDate != undefined) {
      console.log(req.body.dueDate);
      await Todo.findOneAndUpdate({'_id':todo._id}, {$addToSet:{'dueDate':req.body.dueDate}});
    }
    return res.json({'message':'post success'});
  });
});

router.put('/todo', function(req, res, next) {
  if (req.body.dueDate != undefined) {
    Todo.findOneAndUpdate(
      {'_id':req.body.todoId},
      {$set:{'title':req.body.title,
             'content':req.body.content,
             'priority':req.body.priority,
             'done':req.body.done,
             'dueDate':req.body.dueDate}},
      function(err, todo) {
        if (err) return res.render('error', {message:err.message, error:{}});
        return res.json({'message':'modify success'});
    });
  }
  else {
    Todo.findOneAndUpdate(
      {'_id':req.body.todoId},
      {$set:{'title':req.body.title, 'content':req.body.content, 'priority':req.body.priority, 'done':req.body.done}},
      function(err, todo) {
        if (err) return res.render('error', {message:err.message, error:{}});
        return res.json({'message':'modify success'});
    });
  }
});

router.delete('/todo', async function(req, res, next) {
  await Todo.deleteOne({'_id':req.body.todoId});
  return res.json({'message':'delete success'});
});

function formatDate(date) {
  var d = new Date(date),
  month = "" + (d.getMonth() + 1),
  day = "" + d.getDate(),
  year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
}

module.exports = router;
