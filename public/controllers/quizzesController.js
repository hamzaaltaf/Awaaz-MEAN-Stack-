myapp.controller('quizzesController',function ($scope, $mdDialog, $route, $routeParams, $http, $location, sessionService, markingService) {
$scope.markingService = markingService;
$scope.sessionService = sessionService;
$scope.changeButton = false;
var aquiz = [
	{category_id: 9, statement: 'images/fruits/apple.jpg', options:{A:'Apple', B:'Malta', C:'Melon'}, answer: 'A'}
	,{category_id: 9, statement: 'images/fruits/pear.jpg', options:{A:'Apple', B:'Malta', C:'Melon'}, answer: 'A'}
	,{category_id: 9, statement: 'images/fruits/pineapple.jpg', options:{A:'Apple', B:'Malta', C:'Melon'}, answer: 'A'}
	,{category_id: 9, statement: 'images/fruits/watermelon.jpg', options:{A:'Apple', B:'Malta', C:'Melon'}, answer: 'A'}

]

$scope.checkAnswers = function(answers, answer) {
	keys  = Object.keys($scope.answers)
	console.log('This is scope ' + keys);
	if (keys == answer) {
		markingService.increment()
		console.log('Ho gya')
	}
	counter  = Number($routeParams.qid) + 1;
	$location.path('category/'+ $routeParams.id + '/quiz/'+ counter);
	console.log('Counter is ' + counter + ' === ' + $scope.questionsArr.length)
	if ($scope.changeButton == true) {
		$http.post('/addMarks', {marks: markingService.get('score'), owner_id: sessionService.get('user'), category_id: $routeParams.id}).then(function(res){
			if (res.data.message == 'Marking Created') {
				$location.path('/category/'+$routeParams.id);
			}
		})
	}
}

function getQuizOfCategory(quizzes, Cid, index) {
			var questionsArr = [];
			for (var i=0; i < quizzes.length; i++) {
				if (quizzes[i].category_id == Cid) {
					questionsArr.push(quizzes[i]);
				}
    	}
			if (index == questionsArr.length) {
				$scope.changeButton = true;
			} 
			return questionsArr[index - 1];
		}
		$scope.questionsArr = getQuizOfCategory(aquiz, $routeParams.id, $routeParams.qid)
var quizDict = [
    {id: 9,
	category:"Fruits",
	questions: ["images/fruits/apple.jpg", "images/fruits/watermelon.jpg", "categories/fruits/pineapple.jpg", "categories/fruits/cherry.jpg", "categories/fruits/pear.jpg"],
	options: ["A. سیب B. اسٹرابیری C. مالٹا ", "A. تربوز B. خربوزه C. سیب", "A. تربوز B. انناس C. اسٹرابیری ", "A. تربوز B. انناس C. چیری ", "A. سیب B. ناشپاتی C. اسٹرابیری"],
	answers:["A", "A", "B", "C", "B"]},

	{id: 14,
	category:"Vegetables",
	questions: ["images/vegetables/tomato.jpg", "images/vegetables/cabbage.jpg", "images/vegetables/garlic.jpg", "images/vegetables/carrot.jpg", "images/vegetables/radish.jpg"],
	options: ["A. ٹماٹر B. مولی  C. آلو ", "A. آلو B. گاجر C. بند گوبهی", "A.گاجر B. ادرک C. لہسن", "A. لوکی B.گاجر C. مولی", "A.مولی B. لہسن C. گاجر"],
	answers: ["A", "C", "C", "B", "A"]},

	{id: 10,
	category: "House",
	questions: ["images/house/room.jpg", "images/house/stairs.jpg", "images/house/terrace.jpg", "images/house/kitchen.jpg", "images/house/bathroom.jpg"],
	options: ["A. گلی B. باغ C.کمره", "A. سیڑھیاں B. چھت C.باورچی خانه ", "A.باورچی خانه B. چھت C. غسلخانه ", "A.باغ B. باورچی خانه C. کمره", "A. غسلخانه B. کمره C. سیڑھیاں"],
	answers: ["C", "A", "B", "B", "A"]},
	
	{id: 3,
        category: "Body Parts",
        questions: ["images/organs/tongue.jpg", "images/organs/ear.jpg", "images/organs/eyes.jpg", "images/organs/teeth.jpg", "images/organs/nose.jpg"],
        options: ["A.چہرہ B.دانت C.زبان", "A.کان B.چہرہ C.ناک", "A.زبان B.آنکھیں C.دانت ", "A.آنکھیں B.دانت C.کان ", "A.چہرہ B.ناک C.زبان"],
        answers: ["C", "A", "B", "B", "B"]},

	{id: 11,
        category: "People",
        questions: ["images/people/sister.jpg", "images/people/father.jpg", "images/people/mother.jpg", "images/people/teacher.jpg", "images/people/doctor.jpg"],
        options: ["A.چچا B.بہن C.بھائی ", "A.بہن B.چاچی C.والد ", "A.بھائی B.ماں C.والد ", "A.استاد B.استانی C.بھائی ", "A.ڈاکٹر B.استاد C.بہن"],
        answers: ["B", "C", "B", "B", "A"]},

	{id: 15,
        category: "Weather",
        questions: ["images/weather/rain.jpg", "images/weather/winter.jpg", "images/weather/autumn.jpg", "images/weather/summer.jpg", "images/weather/spring.jpg"],
        options: ["A.گرمیاں B.بارش C.بہار ", "A.سردی B.گرمیاں C.خزاں ", "A.بہار B.بارش C.خزاں ", "A.خزاں B.گرمیاں C.سردی ", "A.بارش B.گرمیاں C.بہار "],
        answers: ["B", "A", "C", "B", "C"]},
	
	{id: 7,
        category: "Drinks",
        questions: ["images/drinks/drinks.jpg", "images/drinks/water.jpg", "images/drinks/rooh-afza.jpg", "images/drinks/milk.jpg", "images/drinks/lemonade.jpg"],
        options: ["A.پانی B.مشروبات C.رس ", "A.پانی B.شکنجبین C.چائے ", "A.شکنجبین B.روح افزا‎ C.دودھ", "A.چائے B.پانی C.دودھ", "A.شکنجبین B.چائے C.پانی"],
        answers: ["B", "A", "B", "C", "A"]},

	{id: 5,
        category: "Colors",
        questions: ["images/colors/green.jpg", "images/colors/red.jpg", "images/colors/pink.jpg", "images/colors/blue.jpg", "images/colors/black.jpg"],
        options: ["A. سبز B. سرخ C. نیلے", "A. سیاہ B. گلابی C. سرخ ", "A. گلابی B. سبز C. نیلے ", "A. سرخ B. گلابی C. نیلے ", "A.گلابی B. سیاہ C. سبز"],
        answers: ["A", "C", "A", "C", "B"]},
	
	{id: 4,
        category: "City",
        questions: ["images/city/city.jpg", "images/city/building.jpg", "images/city/rickshaw.jpg", "images/city/bus.jpg", "images/city/road.jpg"],
        options: ["A.رکشہ B.شہر C. سڑک", "A.عمارت B. بس C. سڑک", "A.شہر B. گاڑی C.رکشہ ", "A. گاڑی B. عمارت C.بس ", "A. سڑک B.رکشہ C.شہر "],
        answers: ["B", "A", "C", "C", "A"]},

	{id: 2,
        category: "Animals",
        questions: ["images/animals/animals.jpg", "images/animals/lion.jpg", "images/animals/snake.jpg", "images/animals/elephant.jpg", "images/animals/monkey.jpg"],
        options: ["A.عمارت B.انسان C.جانور ", "A.شیر B.بلی C. ", "A.سانپ B.چھپکلی C.بندر ", "A.سانپ B.شیر C. ہاتھی", "A.بلی B.بندر C. چھپکلی "],
        answers: ["C", "A", "A", "C", "B"]},

	{id: 0,
        category: "Activities",
        questions: ["images/activities/running.jpg", "images/activities/drinking.jpg", "images/activities/eating.jpg", "images/activities/sleeping.jpg", "images/activities/studying.jpg"],
        options: ["A.بهاگنا B.چلنا C.مطالع کرنا ", "A.سونا B.پینا C.چلنا ", "A.چلنا B.کھانا C.بهاگنا ", "A.پینا B. مطالع کرنا C.سونا ", "A.بهاگنا B. کھانا C.مطالع کرنا"],
        answers: ["A", "B", "B", "C", "C"]},

	{id: 12,
        category: "Things",
        questions: ["images/things/bag.jpg", "images/things/books.jpg", "images/things/clothes.jpg", "images/things/shoes.jpg", "images/things/key.jpg"],
        options: ["A.چابی B.بستہ C.جوتے ", "A.کتابیں B.جوتے C.گهڑی", "A.چابی B.کپڑے C.بستہ ", "A.کتابیں B.گهڑی C.جوتے", "A.کپڑے B.بستہ C.چابی "],
        answers: ["B", "A", "B", "C", "C"]},
	
	{id: 13,
        category: "Time",
        questions: ["images/time/clock.jpg", "images/time/noon.jpg", "images/time/morning.jpg", "images/time/night.jpg", "images/time/evening.jpg"],
        options: ["A.دیکهنا B.شام C. گهڑی", "A.غروب آفتاب B.دوپہر  C.رات ", "A.شام B.گهڑی C.صبح ", "A. رات B.فجر C.دوپہر ", "A.گهڑی B.شام C.فجر "],
        answers: ["C", "B", "C", "A", "B"]},

	{id: 8,
        category: "Emotions",
        questions: ["images/emotions/scared.jpg", "images/emotions/crying.jpg", "images/emotions/happy.jpg", "images/emotions/sad.jpg", "images/emotions/angry.jpg"],
        options: ["A.دکھی B.ڈرا ہوا C.خوش ", "A.رونا B. غصہ C.ہنسی", "A. ڈرا ہوا B. غصہ C.خوش ", "A.رونا B.دکھی C. ہنسی", "A.خوش B. ڈرا ہوا C.غصہ "],
        answers: ["B", "A", "C", "B", "C"]},

]
    

});