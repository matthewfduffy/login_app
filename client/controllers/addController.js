app.controller('addController', function($scope, userFactory, $location, $cookies){
  $scope.username = $cookies.get('username')
  $scope.id = $cookies.get('id')
  $scope.addQuestion = function(){
    if($scope.poll){
    $scope.poll.user_id = $scope.id
    }
    userFactory.addQuestion($scope.poll, function(data){
      if(data.err){
        $scope.errors = data.err.errors
      }
      else{
        $location.url('/home')
      }
    })
  }
})
