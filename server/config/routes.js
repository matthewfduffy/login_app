var mongoose = require('mongoose')
var User = require('../controllers/users.js')

module.exports = function(app){
  app.post('/user', User.addUser),
  app.post('/poll', User.addPoll),
  app.get('/polls', User.showPolls),
  app.get('/poll/:id', User.findPoll),
  app.post('/vote', User.Vote),
  app.delete('/poll/:id', User.deletePoll)
}
