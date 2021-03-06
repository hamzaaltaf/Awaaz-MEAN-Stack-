myapp.controller('wordsController',function ($scope, $mdDialog, $route, $routeParams, $http, $location, sessionService) {
    $scope.categoryId = $routeParams.id;
		// $scope.catId = $route.current.params.id;
    $scope.getCategoryId = function() {
			return $routeParams.id;
		}
		console.log('This is categoryId ' + $scope.categoryId)
    $scope.sessionService = sessionService;
    
				
var words = [

				{text:'alif', imgSrc:'images/Alphabets/alif.jpg', audioSrc:'Audio/Alphabets/alif.wav', category_id:1},
				{text:'be', imgSrc:'images/Alphabets/be.jpg', audioSrc:'Audio/Alphabets/be.wav', category_id:1},
				{text:'pe', imgSrc:'images/Alphabets/pe.jpg', audioSrc:'Audio/Alphabets/pe.wav', category_id:1},
				{text:'te', imgSrc:'images/Alphabets/te.jpg', audioSrc:'Audio/Alphabets/te.wav', category_id:1},
				{text:'tte', imgSrc:'images/Alphabets/tte.jpg', audioSrc:'Audio/Alphabets/tte.wav', category_id:1},
				{text:'se', imgSrc:'images/Alphabets/se.jpg', audioSrc:'Audio/Alphabets/se.wav', category_id:1},
				{text:'jeem', imgSrc:'images/Alphabets/jeem.jpg', audioSrc:'Audio/Alphabets/jeem.wav', category_id:1},
				{text:'che', imgSrc:'images/Alphabets/che.jpg', audioSrc:'Audio/Alphabets/che.wav', category_id:1},
				{text:'he', imgSrc:'images/Alphabets/he.jpg', audioSrc:'Audio/Alphabets/he.wav', category_id:1},
				{text:'khe', imgSrc:'images/Alphabets/khe.jpg', audioSrc:'Audio/Alphabets/khe.wav', category_id:1},
				{text:'daal', imgSrc:'images/Alphabets/daal.jpg', audioSrc:'Audio/Alphabets/daal.wav', category_id:1},
				{text:'ddaal', imgSrc:'images/Alphabets/ddaal.jpg', audioSrc:'Audio/Alphabets/ddaal.wav', category_id:1},
				{text:'zaal', imgSrc:'images/Alphabets/zaal.jpg', audioSrc:'Audio/Alphabets/zaal.wav', category_id:1},
				{text:'re', imgSrc:'images/Alphabets/re.jpg', audioSrc:'Audio/Alphabets/re.wav', category_id:1},
				{text:'rre', imgSrc:'images/Alphabets/rre.jpg', audioSrc:'Audio/Alphabets/rre.wav', category_id:1},
				{text:'ze', imgSrc:'images/Alphabets/ze.jpg', audioSrc:'Audio/Alphabets/ze.wav', category_id:1},
				{text:'zhe', imgSrc:'images/Alphabets/zhe.jpg', audioSrc:'Audio/Alphabets/zhe.wav', category_id:1},
				{text:'seen', imgSrc:'images/Alphabets/seen.jpg', audioSrc:'Audio/Alphabets/seen.wav', category_id:1},
				{text:'sheen', imgSrc:'images/Alphabets/sheen.jpg', audioSrc:'Audio/Alphabets/sheen.wav', category_id:1},
				{text:'swad', imgSrc:'images/Alphabets/swad.jpg', audioSrc:'Audio/Alphabets/swad.wav', category_id:1},
				{text:'zwad', imgSrc:'images/Alphabets/zwad.jpg', audioSrc:'Audio/Alphabets/zwad.wav', category_id:1},
				{text:'swad', imgSrc:'images/Alphabets/tuein.jpg', audioSrc:'Audio/Alphabets/tuein.wav', category_id:1},
				{text:'zwad', imgSrc:'images/Alphabets/zuein.jpg', audioSrc:'Audio/Alphabets/zuein.wav', category_id:1},
				{text:'aen', imgSrc:'images/Alphabets/aen.jpg', audioSrc:'Audio/Alphabets/aen.wav', category_id:1},
				{text:'ghaen', imgSrc:'images/Alphabets/ghaen.jpg', audioSrc:'Audio/Alphabets/ghaen.wav', category_id:1},
				{text:'fe', imgSrc:'images/Alphabets/fe.jpg', audioSrc:'Audio/Alphabets/fe.wav', category_id:1},
				{text:'qaaf', imgSrc:'images/Alphabets/qaaf.jpg', audioSrc:'Audio/Alphabets/qaaf.wav', category_id:1},
				{text:'kaaf', imgSrc:'images/Alphabets/kaaf.jpg', audioSrc:'Audio/Alphabets/kaaf.wav', category_id:1},
				{text:'gaaf', imgSrc:'images/Alphabets/gaaf.jpg', audioSrc:'Audio/Alphabets/gaaf.wav', category_id:1},
				{text:'laam', imgSrc:'images/Alphabets/laam.jpg', audioSrc:'Audio/Alphabets/laam.wav', category_id:1},
				{text:'meem', imgSrc:'images/Alphabets/meem.jpg', audioSrc:'Audio/Alphabets/meem.wav', category_id:1},
				{text:'noon', imgSrc:'images/Alphabets/noon.jpg', audioSrc:'Audio/Alphabets/noon.wav', category_id:1},
				{text:'wow', imgSrc:'images/Alphabets/wow.jpg', audioSrc:'Audio/Alphabets/wow.wav', category_id:1},
				{text:'hhe', imgSrc:'images/Alphabets/hhe.jpg', audioSrc:'Audio/Alphabets/hhe.wav', category_id:1},
				{text:'hamza', imgSrc:'images/Alphabets/hamza.jpg', audioSrc:'Audio/Alphabets/hamza.wav', category_id:1},
				{text:'choti ye', imgSrc:'images/Alphabets/choti ye.jpg', audioSrc:'Audio/Alphabets/choti ye.wav', category_id:1},
				{text:'bari ye', imgSrc:'images/Alphabets/bari ye.jpg', audioSrc:'Audio/Alphabets/bari ye.wav', category_id:1},
			
			{text: 'Balcony', imgSrc:'images/house/balcony.jpeg', audioSrc:'Audio/house/balcony.wav', category_id:10},
			{text: 'Bathroom', imgSrc:'images/house/bathroom.jpg', audioSrc:'Audio/house/bathroom.wav', category_id:10},
			{text: 'Corridor', imgSrc:'images/house/corridor.jpg', audioSrc:'Audio/house/corridor.wav', category_id:10},
			{text: 'Kitchen', imgSrc:'images/house/kitchen.jpg', audioSrc:'Audio/house/kitchen.wav', category_id:10},
			{text: 'Room', imgSrc:'images/house/room.jpg', audioSrc:'Audio/house/room.wav', category_id:10},
			{text: 'Stairs', imgSrc:'images/house/stairs.png',  audioSrc:'Audio/house/stairs.wav', category_id:10},
			{text: 'Terrace', imgSrc:'images/house/terrace.jpg',  audioSrc:'Audio/house/terrace.wav', category_id:10},
			
			{text:'City', imgSrc:'images/city/city.jpg', audioSrc:'Audio/city/city.wav', category_id:4},
			{text:'Hospital', imgSrc:'images/city/hospital.0.jpg', audioSrc:'Audio/city/hospital.wav', category_id:4},
			{text:'Park', imgSrc:'images/city/park.jpg', audioSrc:'Audio/city/park.wav', category_id:4},
			{text:'Rickshaw', imgSrc:'images/city/rickshaw.jpg', audioSrc:'Audio/city/rickshaw.wav', category_id:4},
			{text:'Road', imgSrc:'images/city/road.jpg', audioSrc:'Audio/city/road.wav', category_id:4},
						
			{text:'Red', imgSrc:'images/colors/red.jpg', audioSrc:'Audio/colors/red.wav', category_id:5},
			{text:'Black', imgSrc:'images/colors/black.jpg', audioSrc:'Audio/colors/black.wav', category_id:5},
			{text:'Pink', imgSrc:'images/colors/pink.jpg', audioSrc:'Audio/colors/pink.wav', category_id:5},
			{text:'Purple', imgSrc:'images/colors/purple.jpg', audioSrc:'Audio/colors/purple.wav', category_id:5},
			{text:'Green', imgSrc:'images/colors/dinosaur.jpg', audioSrc:'Audio/colors/green.wav', category_id:5},
			{text:'Orange', imgSrc:'images/colors/orange.jpg', audioSrc:'Audio/colors/orange.wav', category_id:5},
			{text:'Blue', imgSrc:'images/colors/blue.jpg', audioSrc:'Audio/colors/blue.wav', category_id:5},
			
			{text:'Lemonade', imgSrc:'images/drinks/lemonade.jpg', audioSrc:'Audio/drinks/lemonade.wav', category_id:7},
			{text:'Milk', imgSrc:'images/drinks/milk.jpg', audioSrc:'Audio/drinks/milk.wav', category_id:7},
			{text:'Rooh-Afza', imgSrc:'images/drinks/rooh-afza.jpg', audioSrc:'Audio/drinks/rooh-afza.wav', category_id:7},
			{text:'Apple juice', imgSrc:'images/drinks/apple juice.jpg', audioSrc:'Audio/drinks/apple juice.wav', category_id:7},
			{text:'Water', imgSrc:'images/drinks/water.jpg', audioSrc:'Audio/drinks/water.wav', category_id:7},
			{text:'Soda', imgSrc:'images/drinks/soda.jpg', audioSrc:'Audio/drinks/soda.wav', category_id:7},

			{text:'Scared', imgSrc:'images/emotions/scared.jpg', audioSrc:'Audio/emotions/scared.wav', category_id:8},
			{text:'Confused', imgSrc:'images/emotions/confused.jpg', audioSrc:'Audio/emotions/confused.wav', category_id:8},
			{text:'Sad', imgSrc:'images/emotions/sad.jpg', audioSrc:'Audio/emotions/sad.wav', category_id:8},
			{text:'Angry', imgSrc:'images/emotions/angry.jpg', audioSrc:'Audio/emotions/angry.wav', category_id:8},
			{text:'Crying', imgSrc:'images/emotions/crying.jpg', audioSrc:'Audio/emotions/crying.wav', category_id:8},
			{text:'Happy', imgSrc:'images/emotions/happy.jpg', audioSrc:'Audio/emotions/happy.wav', category_id:8},
			{text:'Surprised', imgSrc:'images/emotions/surprised.jpg', audioSrc:'Audio/emotions/surprised.wav', category_id:8},

			
			{text:'Frog', imgSrc:'images/animals/frog.jpg', audioSrc:'Audio/animals/frog.wav', category_id:2},
			{text:'Whale', imgSrc:'images/animals/whale.jpg', audioSrc:'Audio/animals/whale.wav', category_id:2},
			{text:'Monkey', imgSrc:'images/animals/monkey.jpg', audioSrc:'Audio/animals/monkey.wav', category_id:2},
			{text:'Owl', imgSrc:'images/animals/owl.jpg', audioSrc:'Audio/animals/owl.wav', category_id:2},
			{text:'Snake', imgSrc:'images/animals/snake.jpg', audioSrc:'Audio/animals/snake.wav', category_id:2},
			{text:'Lion', imgSrc:'images/animals/lion.jpg', audioSrc:'Audio/animals/lion.wav', category_id:2},
			{text:'Tiger', imgSrc:'images/animals/tiger.jpg', audioSrc:'Audio/animals/tiger.wav', category_id:2},
			{text:'Elephant', imgSrc:'images/animals/elephant.jpg', audioSrc:'Audio/animals/elephant.wav', category_id:2},
			{text:'Giraffe', imgSrc:'images/animals/giraffe.jpg', audioSrc:'Audio/animals/giraffe.wav', category_id:2},
			{text:'Mouse', imgSrc:'images/animals/mouse.jpg', audioSrc:'Audio/animals/mouse.wav', category_id:2},
			{text:'Peacock', imgSrc:'images/animals/peacock.jpg', audioSrc:'Audio/animals/peacock.wav', category_id:2},
			{text:'Goat', imgSrc:'images/animals/goat.jpg', audioSrc:'Audio/animals/goat.wav', category_id:2},

			{text:'Mouth', imgSrc:'images/organs/mouth.jpg', audioSrc:'Audio/organs/mouth.wav', category_id:3},
			{text:'Face', imgSrc:'images/organs/face.jpg', audioSrc:'Audio/organs/face.wav', category_id:3},
			{text:'Nose', imgSrc:'images/organs/nose.jpg', audioSrc:'Audio/organs/nose.wav', category_id:3},
			{text:'Ears', imgSrc:'images/organs/ears.jpg', audioSrc:'Audio/organs/ears.wav', category_id:3},
			{text:'Hands', imgSrc:'images/organs/hands.jpg', audioSrc:'Audio/organs/hands.wav', category_id:3},
			{text:'Foot', imgSrc:'images/organs/foot.jpg', audioSrc:'Audio/organs/foot.wav', category_id:3},
			{text:'Arms', imgSrc:'images/organs/arms.jpg', audioSrc:'aAudio/organs/arms.wav', category_id:3},
			{text:'Tongue', imgSrc:'images/organs/tongue.jpg', audioSrc:'Audio/organs/tongue.wav', category_id:3},
			{text:'Teeth', imgSrc:'images/organs/teeth.jpg', audioSrc:'Audio/organs/teeth.wav', category_id:3},
			{text:'Eyes', imgSrc:'images/organs/eyes.jpg', audioSrc:'Audio/organs/eyes.wav', category_id:3},

			{text:'Mirror', imgSrc:'images/things/mirror.jpg', audioSrc:'Audio/things/mirror.wav', category_id:12},
			{text:'Toy', imgSrc:'images/things/toy.jpg', audioSrc:'Audio/things/toy.wav', category_id:12},
			{text:'Scissor', imgSrc:'images/things/scissor.jpg', audioSrc:'Audio/things/scissor.wav', category_id:12},
			{text:'Shoes', imgSrc:'images/things/shoes.jpg', audioSrc:'Audio/things/shoes.wav', category_id:12},
			{text:'Key', imgSrc:'images/things/key.jpg', audioSrc:'Audio/things/key.wav', category_id:12},
			{text:'Books', imgSrc:'images/things/books.jpg', audioSrc:'Audio/things/books.wav', category_id:12},
			{text:'Clothes', imgSrc:'images/things/clothes.jpg', audioSrc:'Audio/things/clothes.wav', category_id:12},
			{text:'Bag', imgSrc:'images/things/bag.jpg', audioSrc:'Audio/things/bag.wav', category_id:12},
			{text:'Lock', imgSrc:'images/things/lock.jpg', audioSrc:'Audio/things/lock.wav', category_id:12},
			{text:'Umbrella', imgSrc:'images/things/umbrella.jpg', audioSrc:'Audio/things/umbrella.wav', category_id:12},

			{text:'Autumn', imgSrc:'images/weather/autumn.jpg', audioSrc:'Audio/weather/autumn.wav', category_id:15},
			{text:'Rain', imgSrc:'images/weather/rain.jpg', audioSrc:'Audio/weather/rain.wav', category_id:15},
			{text:'Spring', imgSrc:'images/weather/spring.jpg', audioSrc:'Audio/weather/spring.wav', category_id:15},
			{text:'Summer', imgSrc:'images/weather/summer.jpg', audioSrc:'Audio/weather/summer.wav', category_id:15},
			{text:'Winter', imgSrc:'images/weather/winter.jpg', audioSrc:'Audio/weather/winter.wav', category_id:15},

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
			{text:"washing dishes",imgSrc:'images/activities/washingdishes.jpg', audioSrc:'Audio/activities/washingdishes.wav', category_id: 0},


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