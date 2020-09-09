// set up mongoose connection

module.exports = require('mongoose').connect('mongodb://localhost/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})