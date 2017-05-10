
myapp.controller('categoriesController',function ($scope, $mdDialog, $route, $routeParams, $http, $location, sessionService) {
     $scope.sessionService = sessionService;
     $scope.categories = [
        {text:'Activities', src:'images/Categories/activities.png',id:0},         
        {text: 'Alphabets', src:'images/Categories/alphabets.jpg',id:1},
        {text: 'Animals', src:'images/Categories/animals.png',id:2},
         {text: 'Body Parts', src:'images/Categories/body parts.jpeg',id:3},
        {text: 'City', src:'images/Categories/city.png',id:4},
        {text: 'Colors', src:'images/Categories/colors.jpeg',id:5},
        {text: 'Daily', src:'images/Categories/daily.png',id:6},
        {text: 'Drinks', src:'images/Categories/drinks.png',id:7},
        {text: 'Emotions', src:'images/Categories/emotions.jpg',id:8},
        {text: 'Fruits', src:'images/Categories/fruits.jpg',id:9},
        {text: 'House', src:'images/Categories/house.png',id:10},
        {text: 'People', src:'images/Categories/people.jpg',id:11},
        {text: 'Things', src:'images/Categories/things.png',id:12},
         {text: 'Time', src:'images/Categories/time.jpg',id:13},
        {text: 'Vegetables', src:'images/Categories/vegetables.jpg',id:14},
        {text: 'Weather', src:'images/Categories/weather.jpg',id:15}
      
      
      ];
      // forthe category CRUD
      $scope.getID = function() {
        return $routeParams.id;
      }

      $scope.showCategory = function(id) {
        $scope.categoryId = id;
        // $location.path('/category/' + id);
      }

      $scope.addCategory = function() {
        console.log($scope.category);
        $http.post('/addCategory', $scope.category).then(function(res){
          console.log('Received the response ' + res)
        })
      }
      // category CRUD ended

      $scope.showDailog = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'templates/category_add_dailog.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
    };

    $scope.userCategories = function(id) {
      console.log('Called the userCategories  ' + id )
      $http.post('/userCategories', {id: id}).then(function(res){
        console.log(res.data)
        $scope.userDefinedCategories = res.data 
      })
    }


    // I did not understand this 
    function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

})