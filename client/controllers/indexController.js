app.controller('indexController', function($scope, userFactory, $cookies, $location){
  $scope.username = $cookies.get('username')
  $scope.id = $cookies.get('id')
  $scope.logout = function(){
  $cookies.remove('username')
  $cookies.remove('id')
  $location.url('/')
}
$scope.showPolls = function(){
  userFactory.showPolls(function(data){
    if(data.err){
      console.log(data.err)
    }
    else{
      $scope.polls = data.polls
    }
  })
}
$scope.showPolls();
$scope.delete = function(poll_id){
  factory.delete(poll_id, function(data){
    if(data.err){
      console.log(data.err)
    }
    else{
      console.log(data.poll)
      $scope.showPolls();
    }
  })
}
})
