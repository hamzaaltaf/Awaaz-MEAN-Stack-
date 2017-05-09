myapp.controller('wordsController',function ($scope, $mdDialog, $route, $routeParams, $http, $location, sessionService) {
    $scope.categoryId = $routeParams.id;
		// $scope.catId = $route.current.params.id;
    $scope.getCategoryId = function() {
			return $routeParams.id;
		}
		console.log('This is categoryId ' + $scope.categoryId)
    $scope.sessionService = sessionService;
    

    var words = [
			
			{text: 'Balcony', imgSrc:'images/house/balcony.jpeg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text: 'Bathroom', imgSrc:'images/house/bathroom.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text: 'Corridor', imgSrc:'images/house/corridor.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text: 'Kitchen', imgSrc:'images/house/kitchen.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text: 'Room', imgSrc:'images/house/room.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text: 'Stairs', imgSrc:'images/house/stairs.png',  audioSrc:'audio files/weather.mp3', category_id:8},
			{text: 'Terrace', imgSrc:'images/house/terrace.jpg',  audioSrc:'audio files/weather.mp3', category_id:8},
			
			{text:'City', imgSrc:'images/city/city.jpg', audioSrc:'Audio/city/city.wav', category_id:4},
			{text:'Hospital', imgSrc:'images/city/hospital.0.jpg', audioSrc:'Audio/city/hospital.wav', category_id:4},
			{text:'Park', imgSrc:'images/city/park.jpg', audioSrc:'Audio/city/park.wav', category_id:4},
			{text:'Rickshaw', imgSrc:'images/city/rickshaw.jpg', audioSrc:'Audio/city/rickshaw.wav', category_id:4},
			{text:'Road', imgSrc:'images/city/road.jpg', audioSrc:'Audio/city/road.wav', category_id:4},
						
			{text:'Red', imgSrc:'images/colors/red.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			{text:'Black', imgSrc:'images/colors/black.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			{text:'Pink', imgSrc:'images/colors/pink.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			{text:'Purple', imgSrc:'images/colors/purple.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			{text:'Green', imgSrc:'images/colors/dinosaur.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			{text:'Orange', imgSrc:'images/colors/orange.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			{text:'Blue', imgSrc:'images/colors/blue.jpg', audioSrc:'audio files/weather.mp3', category_id:5},
			
			{text:'Lemonade', imgSrc:'images/drinks/lemonade.jpg', audioSrc:'audio files/weather.mp3', category_id:7},
			{text:'Milk', imgSrc:'images/drinks/milk.jpg', audioSrc:'audio files/weather.mp3', category_id:7},
			{text:'Rooh-Afza', imgSrc:'images/drinks/rooh-afza.jpg', audioSrc:'audio files/weather.mp3', category_id:7},
			{text:'Apple juice', imgSrc:'images/drinks/apple juice.jpg', audioSrc:'audio files/weather.mp3', category_id:7},
			{text:'Water', imgSrc:'images/drinks/water.jpg', audioSrc:'audio files/weather.mp3', category_id:7},
			{text:'Soda', imgSrc:'images/drinks/soda.jpg', audioSrc:'audio files/weather.mp3', category_id:7},

			{text:'Scared', imgSrc:'images/emotions/scared.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text:'Confused', imgSrc:'images/emotions/confused.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text:'Sad', imgSrc:'images/emotions/sad.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text:'Angry', imgSrc:'images/emotions/angry.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text:'Crying', imgSrc:'images/emotions/crying.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text:'Happy', imgSrc:'images/emotions/happy.jpg', audioSrc:'audio files/weather.mp3', category_id:8},
			{text:'Surprised', imgSrc:'images/emotions/surprised.jpg', audioSrc:'audio files/weather.mp3', category_id:8},

			
			{text:'Frog', imgSrc:'images/animals/frog.jpg', audioSrc:'audio files/animals/frog.wav', category_id:2},
			{text:'Whale', imgSrc:'images/animals/whale.jpg', audioSrc:'audio files/animals/whale.wav', category_id:2},
			{text:'Monkey', imgSrc:'images/animals/monkey.jpg', audioSrc:'audio files/animals/monkey.wav', category_id:2},
			{text:'Owl', imgSrc:'images/animals/owl.jpg', audioSrc:'audio files/animals/owl.wav', category_id:2},
			{text:'Snake', imgSrc:'images/animals/snake.jpg', audioSrc:'audio files/animals/snake.wav', category_id:2},
			{text:'Lion', imgSrc:'images/animals/lion.jpg', audioSrc:'audio files/animals/lion.wav', category_id:2},
			{text:'Tiger', imgSrc:'images/animals/tiger.jpg', audioSrc:'audio files/animals/tiger.wav', category_id:2},
			{text:'Elephant', imgSrc:'images/animals/elephant.jpg', audioSrc:'audio files/animals/elephant.wav', category_id:2},
			{text:'Giraffe', imgSrc:'images/animals/giraffe.jpg', audioSrc:'audio files/animals/giraffe.wav', category_id:2},
			{text:'Mouse', imgSrc:'images/animals/mouse.jpg', audioSrc:'audio files/animals/mouse.wav', category_id:2},
			{text:'Peacock', imgSrc:'images/animals/peacock.jpg', audioSrc:'audio files/animals/peacock.wav', category_id:2},
			{text:'Goat', imgSrc:'images/animals/goat.jpg', audioSrc:'audio files/animals/goat.wav', category_id:2},

			{text:'Mouth', imgSrc:'images/organs/mouth.jpg', audioSrc:'audio files/organs/mouth.wav', category_id:3},
			{text:'Face', imgSrc:'images/organs/face.jpg', audioSrc:'audio files/organs/face.wav', category_id:3},
			{text:'Nose', imgSrc:'images/organs/nose.jpg', audioSrc:'audio files/organs/nose.wav', category_id:3},
			{text:'Ears', imgSrc:'images/organs/ears.jpg', audioSrc:'audio files/organs/ears.wav', category_id:3},
			{text:'Hands', imgSrc:'images/organs/hands.jpg', audioSrc:'audio files/organs/hands.wav', category_id:3},
			{text:'Foot', imgSrc:'images/organs/foot.jpg', audioSrc:'audio files/organs/foot.wav', category_id:3},
			{text:'Arms', imgSrc:'images/organs/arms.jpg', audioSrc:'aaudio files/organs/arms.wav', category_id:3},
			{text:'Tongue', imgSrc:'images/organs/tongue.jpg', audioSrc:'audio files/organs/tongue.wav', category_id:3},
			{text:'Teeth', imgSrc:'images/organs/teeth.jpg', audioSrc:'audio files/organs/teeth.wav', category_id:3},
			{text:'Eyes', imgSrc:'images/organs/eyes.jpg', audioSrc:'audio files/organs/eyes.wav', category_id:3},

			{text:'Mirror', imgSrc:'images/things/mirror.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Toy', imgSrc:'images/things/toy.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Scissor', imgSrc:'images/things/scissor.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Shoes', imgSrc:'images/things/shoes.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Key', imgSrc:'images/things/key.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Books', imgSrc:'images/things/books.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Clothes', imgSrc:'images/things/clothes.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Bag', imgSrc:'images/things/bag.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Lock', imgSrc:'images/things/lock.jpg', audioSrc:'audio files/weather.mp3', category_id:12},
			{text:'Umbrella', imgSrc:'images/things/umbrella.jpg', audioSrc:'audio files/weather.mp3', category_id:12},

			{text:'Autumn', imgSrc:'images/weather/autumn.jpg', audioSrc:'audio files/weather.mp3', category_id:15},
			{text:'Rain', imgSrc:'images/weather/rain.jpg', audioSrc:'audio files/weather.mp3', category_id:15},
			{text:'Spring', imgSrc:'images/weather/spring.jpg', audioSrc:'audio files/weather.mp3', category_id:15},
			{text:'Summer', imgSrc:'images/weather/summer.jpg', audioSrc:'audio files/weather.mp3', category_id:15},
			{text:'Winter', imgSrc:'images/weather/winter.jpg', audioSrc:'audio files/weather.mp3', category_id:15},

			{text:'Clock', imgSrc:'images/time/clock.jpg', audioSrc:'Audio/time/clock.wav', category_id:13},
			{text:'Evening', imgSrc:'images/time/evening.jpg', audioSrc:'Audio/time/evening.wav', category_id:13},
			{text:'Morning', imgSrc:'images/time/morning.jpg', audioSrc:'Audio/time/morning.wav', category_id:13},
			{text:'Night', imgSrc:'images/time/night.jpg', audioSrc:'Audio/time/night.wav', category_id:13},
			{text:'Noon', imgSrc:'images/time/noon.jpg', audioSrc:'Audio/time/noon.wav', category_id:13},
    
			{text:"cleaning",imgSrc:'images/activities/cleaning.jpg', audioSrc:'Audio/activities/cleaning.wav', category_id: 0},
			{text:"cooking",imgSrc:'images/activities/cooking.jpg', audioSrc:'Audio/activities/cooking.wav', category_id: 0},
			{text:"cycling",imgSrc:'images/activities/cycling.jpg', audioSrc:'Audio/activities/cycling.wav', category_id: 0},
			{text:"dancing",imgSrc:'images/activities/dancing.jpg', audioSrc:'Audio/activities/dancing.wav', category_id: 0},
			{text:"drinking",imgSrc:'images/activities/drinking.jpg', audioSrc:'Audio/activities/drinking.wav', category_id: 0},
			{text:"eating",imgSrc:'images/activities/eating.jpg', audioSrc:'Audio/activities/eating.wav', category_id: 0},
			{text:"gardening",imgSrc:'images/activities/gardening.jpg', audioSrc:'Audio/activities/gardening.wav', category_id: 0},
			{text:"playing",imgSrc:'images/activities/playing.jpg', audioSrc:'Audio/activities/playing.wav', category_id: 0},
			{text:"running",imgSrc:'images/activities/running.jpg', audioSrc:'Audio/activities/running.wav', category_id: 0},
			{text:"singing",imgSrc:'images/activities/singing.jpg', audioSrc:'Audio/activities/singing.wav', category_id: 0},
			{text:"sleeping",imgSrc:'images/activities/sleeping.jpg', audioSrc:'Audio/activities/sleeping.wav', category_id: 0},
			{text:"studying",imgSrc:'images/activities/studying.jpg', audioSrc:'Audio/activities/studying.wav', category_id: 0},
			{text:"swimming",imgSrc:'images/activities/swimming.jpg', audioSrc:'Audio/activities/swimming.wav', category_id: 0},
			{text:"talking",imgSrc:'images/activities/talking.jpg', audioSrc:'Audio/activities/talking.wav', category_id: 0},
			{text:"washingdishes",imgSrc:'images/activities/washingdishes.jpg', audioSrc:'Audio/activities/washingdishes.wav', category_id: 0},


			{text:"apple",imgSrc:'images/fruits/apple.jpg', audioSrc:'Audio/fruits/apple.wav', category_id:9},
			{text:"cherry",imgSrc:'images/fruits/cherry.jpg', audioSrc:'Audio/fruits/cherry.wav', category_id:9},
			{text:"orange",imgSrc:'images/fruits/orange.jpg', audioSrc:'Audio/fruits/orange.wav', category_id:9},
			{text:"pear",imgSrc:'images/fruits/pear.jpg', audioSrc:'Audio/fruits/pear.wav', category_id:9},
			{text:"pineapple",imgSrc:'images/fruits/pineapple.jpg', audioSrc:'Audio/fruits/pineapple.wav', category_id:9},
			{text:"raspberry",imgSrc:'images/fruits/raspberry.jpg', audioSrc:'Audio/fruits/raspberry.wav', category_id:9},
			{text:"strawberry",imgSrc:'images/fruits/strawberry.jpg', audioSrc:'Audio/fruits/strawberry.wav', category_id:9},
			{text:"watermelon",imgSrc:'images/fruits/water-melon.jpg', audioSrc:'Audio/fruits/watermelon.wav', category_id:9},


			{text:"baby",imgSrc:'images/people/baby.jpg', audioSrc:'Audio/people/baby.wav', category_id: 11},
			{text:"brother",imgSrc:'images/people/brother.jpg', audioSrc:'Audio/people/brother.wav', category_id: 11},
			{text:"doctor",imgSrc:'images/people/doctor.jpeg', audioSrc:'Audio/people/doctor.wav', category_id: 11},
			{text:"father",imgSrc:'images/people/father.jpg', audioSrc:'Audio/people/father.wav', category_id: 11},
			{text:"friend",imgSrc:'images/people/friend.jpg', audioSrc:'Audio/people/friend.wav', category_id: 11},
			{text:"mother",imgSrc:'images/people/mother.jpg', audioSrc:'Audio/people/mother.wav', category_id: 11},
			{text:"postman",imgSrc:'images/people/postman.jpeg', audioSrc:'Audio/people/postman.wav', category_id: 11},
			{text:"singer",imgSrc:'images/people/singer.jpg', audioSrc:'Audio/people/singer.wav', category_id: 11},
			{text:"sister",imgSrc:'images/people/sister.jpg', audioSrc:'Audio/people/sister.wav', category_id: 11},
			{text:"tailor",imgSrc:'images/people/tailor.jpg', audioSrc:'Audio/people/tailor.wav', category_id: 11},
			{text:"teacher",imgSrc:'images/people/teacher.jpeg', audioSrc:'Audio/people/teacher.wav', category_id: 11},

			{text:"cabbage",imgSrc:'images/vegetables/cabbage.jpg', audioSrc:'Audio/vegetables/cabbage.wav', category_id: 14},
			{text:"capsicum",imgSrc:'images/vegetables/capsicum.jpg', audioSrc:'Audio/vegetables/capsicum.wav', category_id: 14},
			{text:"carrot",imgSrc:'images/vegetables/carrot.jpg', audioSrc:'Audio/vegetables/carrot.wav', category_id: 14},
			{text:"cauliflower",imgSrc:'images/vegetables/Cauliflower.jpg', audioSrc:'Audio/vegetables/Cauliflower.wav', category_id: 14},
			{text:"cucumber",imgSrc:'images/vegetables/cucumber.jpg', audioSrc:'Audio/vegetables/cucumber.wav', category_id: 14},
			{text:"eggplant",imgSrc:'images/vegetables/eggplant.jpg', audioSrc:'Audio/vegetables/eggplant.wav', category_id: 14},
			{text:"garlic",imgSrc:'images/vegetables/garlic.jpg', audioSrc:'Audio/vegetables/garlic.wav', category_id: 14},
			{text:"ginger",imgSrc:'images/vegetables/ginger.jpg', audioSrc:'Audio/vegetables/ginger.wav', category_id: 14},
			{text:"okra",imgSrc:'images/vegetables/okra.jpg', audioSrc:'Audio/vegetables/okra.wav', category_id: 14},
			{text:"onion",imgSrc:'images/vegetables/onion.jpg', audioSrc:'Audio/vegetables/onion.wav', category_id: 14},
			{text:"peas",imgSrc:'images/vegetables/peas.jpg', audioSrc:'Audio/vegetables/peas.wav', category_id: 14},
			{text:"potato",imgSrc:'images/vegetables/potato.jpg', audioSrc:'Audio/vegetables/potato.wav', category_id: 14},
			{text:"radish",imgSrc:'images/vegetables/radish.jpg', audioSrc:'Audio/vegetables/radish.wav', category_id: 14},
			{text:"squash",imgSrc:'images/vegetables/squash.jpg', audioSrc:'Audio/vegetables/squash.wav', category_id: 14},
			{text:"tomato",imgSrc:'images/vegetables/tomato.jpg', audioSrc:'Audio/vegetables/tomato.wav', category_id: 14},
			{text:"turnip",imgSrc:'images/vegetables/turnip.jpg', audioSrc:'Audio/vegetables/turnip.wav', category_id: 14}
		]

$scope.dashboard = function() {
 $location.path('/user/dashboard')
}
		
$scope.play = function(audioSrc){
        var audio = new Audio(audioSrc);
        audio.play();
}
$scope.back = function() {
	$location.path($window.history.back());
}

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