 myapp.controller('userController',function ($scope, $timeout, $route, $rootScope, $routeParams, $http, $location, sessionService) {
    console.log('Initialized');
    $scope.showAlert = false;
    $scope.showit = false;
    $rootScope.user_id = null;
    $scope.sessionService = sessionService;
    $scope.submit = function() {
        console.log($scope.userData)
        $http.post('/user/create', $scope.userData).then(function(res){
        $scope.user = res.data
        $location.path('/user/dashboard')
        })
    }

    $scope.SignIn = function() {
        console.log($scope.signIn)
        $http.post('/user/signin', $scope.signIn).then(function(res){
            console.log(res)
            if (res.data.message == 'Password is Incorrect') {
                console.log('Password was incorrect')
                $scope.showAlert = true;
                $scope.SignInMessage = 'Password is incorrect';
        } else if (res.data.message == 'Successfully Logged In') {
                console.log('Logged In')
                // $scope.showit = true;
                var uId = res.data.user._id;
                var uEmail = res.data.user.email;
                sessionService.set('user', uId);
                $rootScope.user_id = sessionService.get(uEmail);
                $scope.showit = true;
                console.log('This is showit ' + $scope.showit)
                console.log('   This is user_id ' + $rootScope.user_id)
                $location.path('/user/dashboard')
        } else {
                console.log('   This is user_id ' + $rootScope.user_id)
                // handle any other exception
        }
        }) 
    }
    $scope.logout = function(){
        console.log('called with the id ' + $rootScope.user_id);
        sessionService.destroy($rootScope.user_id);
        $location.path('/')
    }

    $scope.isActive = function(viewLocation) {
        console.log(viewLocation + '===' + $location.path())
        return viewLocation === $location.path();
    };    
})