 myapp.controller('userController',function ($scope, $mdSidenav, $timeout, $route, $rootScope, $routeParams, $http, $location, sessionService) {
    console.log('Initialized');
    $scope.showAlert = false;
    $scope.showit = false;
    $rootScope.user_id = null;
    $scope.sessionService = sessionService;
    $scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Statistics',
      icon: 'group'
    },
  ];
    
    // navigation code
    $scope.navigateStats = function(){
        id = sessionService.get('user');
        $location.path('/user/'+$routeParams.id+'/stats');
    }
    
    $scope.navigateDashboard = function() {
        $location.path('/user/'+$routeParams.id+'/dashboard');
    }

    $scope.submit = function() {
        console.log($scope.userData)
        $http.post('/user/create', $scope.userData).then(function(res){
        $scope.user = res.data
        $location.path('/user/'+$routeParams.id+'/dashboard');
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
                $location.path('/user/'+res.data.user._id+'/dashboard')
        } else {
                console.log('   This is user_id ' + $rootScope.user_id)
                // handle any other exception
        }
        }) 
    }

    $scope.updateUser = function() {
        console.log('This is user ' + $scope.userInfo);
        $http.post('/user/update', $scope.userInfo).then(function(res){
            // show notice and take back to the user dashboard
           $scope.updateMessage = 'Details Updated';
           $scope.showUpdateAlert = true;
           $location.path('/user/'+$routeParams.id+'/edit');
        })
    }
    $scope.logout = function(){
        console.log('called with the id ' + $rootScope.user_id);
        sessionService.destroy($rootScope.user_id);
        $location.path('/')
    }

    $scope.getUser = function() {
        
        $http.post('/user/show', {id: $routeParams.id}).then(function(res){
            // show notice and take back to the user dashboard
            console.log('this is res ' + res.data)
            $scope.userInfo = res.data;
        })
    }
    
    function getPassed(data, total) {
        var questionsArr = [];
        for (var i=0; i < total; i++) {
            if (data[i].total / 2 <= data[i].marks) {
                questionsArr.push(data[i]);
            }
        }
        return questionsArr;
    }

    function getLevel(total, passed) {
        if (total < 6 ) {
             return 'Beginner'
        } else if ((total > 6) && (total < 10)) {
            return 'Intermediate'
        } else {
            return 'Expert'
        }
    }
    $scope.getUserStats = function() {
         id = $routeParams.id;
         $http.post('/user/stats', {id: id}).then(function(res) {
            //
            
            $scope.stats = res.data;
            $scope.totalStats = res.data.length;
            console.log('this is res data  ' + $scope.totalStats)
            $scope.passed = getPassed(res.data, $scope.totalStats);
            $scope.level = getLevel($scope.totalStats, $scope.passed)
        })
    }

    $scope.account_edit = function(id) {
        console.log('called with the id ' + id);
        id = sessionService.get('user');
        $location.path('/user/'+$routeParams.id+'/edit');
    }
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };

    $scope.isActive = function(viewLocation) {
        console.log(viewLocation + '===' + $location.path())
        return viewLocation === $location.path();
    };    
})