myapp.controller('wordsController',function ($scope, $mdDialog, $route, $routeParams, $http, $location, sessionService) {
    $scope.categoryId = $routeParams.id;
		// $scope.catId = $route.current.params.id;
    $scope.getCategoryId = function() {
			return $routeParams.id;
		}
		console.log('This is categoryId ' + $scope.categoryId)
    $scope.sessionService = sessionService;
    
    var words = [
			{text: 'Balcony', imgSrc:'images/house/balcony.jpeg', audioSrc:'', category_id:8},
			{text: 'Bathroom', imgSrc:'images/house/bathroom.jpg', audioSrc:'', category_id:8},
			{text: 'Corridor', imgSrc:'images/house/corridor.jpg', audioSrc:'', category_id:8},
			{text: 'Kitchen', imgSrc:'images/house/kitchen.jpg', audioSrc:'', category_id:8},
			{text: 'Room', imgSrc:'images/house/room.jpg', audioSrc:'', category_id:8},
			{text: 'Stairs', imgSrc:'images/house/stairs.png',  audioSrc:'', category_id:8},
			{text: 'Terrace', imgSrc:'images/house/terrace.jpg',  audioSrc:'', category_id:8},
			{text:'Beach', imgSrc:'images/city/beach.jpg', audioSrc:'', category_id:'4'},
			{text:'Building', imgSrc:'images/city/building.jpg', audioSrc:'', category_id:'4'},
			{text:'Bus', imgSrc:'images/city/bus.jpg', audioSrc:'', category_id:'4'},
			{text:'City', imgSrc:'images/city/city.jpg', audioSrc:'', category_id:'4'},
			{text:'Hospital', imgSrc:'images/city/hospital.0.jpg', audioSrc:'', category_id:'4'},
			{text:'Park', imgSrc:'images/city/park.jpg', audioSrc:'', category_id:'4'},
			{text:'Rickshaw', imgSrc:'images/city/rickshaw.jpg', audioSrc:'', category_id:'4'},
			{text:'Road', imgSrc:'images/city/road.jpg', audioSrc:'', category_id:'4'},
			{text:'Signal', imgSrc:'images/city/signal.jpg', audioSrc:'', category_id:'4'},
			
			{text:'Red', imgSrc:'images/colors/red.jpg', audioSrc:'', category_id:'5'},
			{text:'Black', imgSrc:'images/colors/black.jpg', audioSrc:'', category_id:'5'},
			{text:'Pink', imgSrc:'images/colors/pink.jpg', audioSrc:'', category_id:'5'},
			{text:'Purple', imgSrc:'images/colors/purple.jpg', audioSrc:'', category_id:'5'},
			{text:'Green', imgSrc:'images/colors/dinosaur.jpg', audioSrc:'', category_id:'5'},
			{text:'Orange', imgSrc:'images/colors/orange.jpg', audioSrc:'', category_id:'5'},
			{text:'Blue', imgSrc:'images/colors/blue.jpg', audioSrc:'', category_id:'5'},
			
			{text:'Lemonade', imgSrc:'images/drinks/lemonade.jpg', audioSrc:'', category_id:'7'},
			{text:'Milk', imgSrc:'images/drinks/milk.jpg', audioSrc:'', category_id:'7'},
			{text:'Rooh-Afza', imgSrc:'images/drinks/rooh-afza.jpg', audioSrc:'', category_id:'7'},
			{text:'Apple juice', imgSrc:'images/drinks/apple juice.jpg', audioSrc:'', category_id:'7'},
			{text:'Water', imgSrc:'images/drinks/water.jpg', audioSrc:'', category_id:'7'},
			{text:'Soda', imgSrc:'images/drinks/soda.jpg', audioSrc:'', category_id:'7'},

			{text:'Scared', imgSrc:'images/emotions/scared.jpg', audioSrc:'', category_id:'8'},
			{text:'Confused', imgSrc:'images/emotions/confused.jpg', audioSrc:'', category_id:'8'},
			{text:'Sad', imgSrc:'images/emotions/sad.jpg', audioSrc:'', category_id:'8'},
			{text:'Angry', imgSrc:'images/emotions/angry.jpg', audioSrc:'', category_id:'8'},
			{text:'Crying', imgSrc:'images/emotions/crying.jpg', audioSrc:'', category_id:'8'},
			{text:'Happy', imgSrc:'images/emotions/happy.jpg', audioSrc:'', category_id:'8'},
			{text:'Surprised', imgSrc:'images/emotions/surprised.jpg', audioSrc:'', category_id:'8'}

    ]
		
		function getWordsOfCategory(words, Cid) {
			var wordsArr = [];
			for (var i=0; i < words.length; i++) {
				if (words[i].category_id == Cid) {
					wordsArr.push(words[i]);
				}
    	}
			if ($routeParams.id.length > 2) {
				console.log('sending request')
				$http.post('/getWords', {id: $routeParams.id}).then(function(res){
					for(var i = 0; i < res.data.word.length; i++) {
						console.log(res.data.word[i][0])
						wordsArr.push(res.data.word[i]);
					}
					for(var i = 0; i < wordsArr.length; i++) {
						console.log(wordsArr[i].text);
						console.log(wordsArr[i].imgSrc);
						console.log(wordsArr[i].audioSrc);
					}
					return wordsArr;
			})
		}
			return wordsArr;
    }
		
		$scope.wordsArr = getWordsOfCategory(words, $routeParams.id);
		
// for dialog 
$scope.showDailog = function(ev) {
	$mdDialog.show({
		controller: DialogController,
		templateUrl: 'templates/word_add_dailog.html',
		parent: angular.element(document.body),
		targetEvent: ev,
		clickOutsideToClose:true,
		fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
	})
};

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