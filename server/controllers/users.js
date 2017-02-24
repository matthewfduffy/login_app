var mongoose = require('mongoose')
var User = mongoose.model('User')
var Poll = mongoose.model('Poll')

module.exports = {
  addUser: function(request, response){
    User.findOne({username: request.body.username}, function(err, user){
      console.log(user)
      if(err){
        response.json({err: err})
      }
      else if (user){
        response.json({user:user})
      }
      else{
        var user = User({username: request.body.username})
        user.save(function(err, user){
          if(err){
            response.json({err: err})
          }
          else{
            response.json({user: user})
          }
        })
      }
    })
  },
  addPoll: function(request, response){
    User.findOne({_id: request.body.user_id}, function(err, user){
      if(err){
        response.json({err: err})
      }
      else{
        var poll = new Poll({question: request.body.question, option1: request.body.option1, option2: request.body.option2, option3: request.body.option3, option4: request.body.option4, _user: user})
        poll.save(function(err, poll){
          if(err){
            response.json({err: err})
          }
          else{
            response.json({poll: poll})
          }
        })
      }
    })
  },
  showPolls: function(request, response){
    Poll.find({}).populate("_user").exec(function(err, polls){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({polls: polls})
      }
    })
  },
  findPoll: function(request, response){
    Poll.findOne({_id: request.params.id}, function(err, poll){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({poll: poll})
      }
    })
  },
  Vote: function(request, response){
    Poll.findOne({_id: request.body.poll_id}, function(err, poll){
      if(err){
        response.json({err: err})
      }
      else{
        if(request.body.number == 1){
          poll.vote_option1 += 1;
          poll.save(function(err, poll){
            if(err){
              response.json({err: err})
            }
            else{
              response.json({poll: poll})
              return;
            }
          })
        }
        if(request.body.number == 2){
          poll.vote_option2 += 1;
          poll.save(function(err, poll){
            if(err){
              response.json({err: err})
            }
            else{
              response.json({poll: poll})
              return;
            }
          })
        }
        if(request.body.number == 3){
          poll.vote_option3 += 1;
          poll.save(function(err, poll){
            if(err){
              response.json({err: err})
            }
            else{
              response.json({poll: poll})
              return;
            }
          })
        }
        if(request.body.number == 4){
          poll.vote_option4 += 1;
          poll.save(function(err, poll){
            if(err){
              response.json({err: err})
            }
            else{
              response.json({poll: poll})
              return;
            }
          })
        }
      }
    })
  },
  deletePoll: function(request, response){
    console.log(request.params)
    Poll.remove({_id: request.params.id}, function(err, poll){
      if(err){
        response.json({err: err})
      }
      else{
        response.json({poll: poll})
      }
    })
  }
}
