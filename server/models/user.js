var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: {type: String, required: [true, "Name is required"]}
}, {timestamps: true})

var pollSchema = mongoose.Schema({
  question: {type: String, required: [true, "Question is required"], minlength: [8, "Question must be longer than 7 characters"]},
  option1: {type: String, required: [true, "Option 1 is required"], minlength: [3, "Option 1 must be longer than 2 characters"]},
  option2: {type: String, required: [true, "Option 2 is required"], minlength: [3, "Option 2 must be longer than 2 characters"]},
  option3: {type: String, required: [true, "Option 3 is required"], minlength: [3, "Option 3 must be longer than 2 characters"]},
  option4: {type: String, required: [true, "Option 4 is required"], minlength: [3, "Option 4 must be longer than 2 characters"]},
  vote_option1: {type: Number, default: 0},
  vote_option2: {type: Number, default: 0},
  vote_option3: {type: Number, default: 0},
  vote_option4: {type: Number, default: 0},
  _user: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
}, {timestamps: true})
mongoose.model('User', userSchema)
mongoose.model('Poll', pollSchema)
