app.factory("userFactory", function($http){
  factory = {};
  factory.addUser = function(user, callback){
    $http.post('/user', user).then(function(data){
      callback(data.data);
  });
};
  factory.addQuestion = function(poll, callback){
    $http.post('/poll', poll).then(function(data){
      callback(data.data);
  });
  };
  factory.showPolls = function(callback){
    $http.get('/polls').then(function(data){
      callback(data.data);
  });
  };
  factory.findPoll = function(poll_id, callback){
    $http.get('/poll/'+poll_id).then(function(data){
      callback(data.data);
  });
  };
  factory.vote = function(vote, callback){
    $http.post('/vote', vote).then(function(data){
      callback(data.data);
  });
  };
  factory.delete = function(poll_id, callback){
    $http.delete('/poll/'+ poll_id).then(function(data){
      callback(data.data);
  });
  };
  return factory;
});
