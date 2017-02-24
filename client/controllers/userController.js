app.controller('userController', function($scope, userFactory, $cookies, $location){
  $scope.addUser = function(){
  userFactory.addUser($scope.user, function(data){
    if(data.err){
      $scope.error = data.err.errors
    }else{
      $cookies.put('id', data.user._id)
      $cookies.put('username', data.user.username)
      $location.url('/home')
    }
  })
  }
})
