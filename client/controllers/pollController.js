app.controller("pollController", function($scope, userFactory, $location, $cookies, $routeParams){
  $scope.username = $cookies.get('username')
  $scope.id = $cookies.get('id')
  $scope.findPoll = function(){
    factory.findPoll($routeParams.id, function(data){
      if(data.err){
        console.log(data.err)
      }
      else{
      $scope.question = data.poll
    }
    })
  }
  $scope.findPoll();
  $scope.vote = function(number){
    $scope.vote_object = {};
    $scope.vote_object.number = number;
    $scope.vote_object.poll_id = $routeParams.id;
    factory.vote($scope.vote_object, function(data){
      if(data.err){
        console.log(data.err)
      }
      else{
        $scope.findPoll();
    }
    })
  }
})
