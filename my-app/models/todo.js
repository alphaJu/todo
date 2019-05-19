var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
 title: {type: String},
 content: {type: String},
 dueDate: {type: Date},
 priority: {type: String},
 done: {type: String}
});

var Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
