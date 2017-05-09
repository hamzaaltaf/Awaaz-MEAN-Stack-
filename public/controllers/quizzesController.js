myapp.controller('quizzesController',function ($scope, $mdDialog, $route, $routeParams, $http, $location, sessionService, markingService) {
$scope.markingService = markingService;
$scope.sessionService = sessionService;
$scope.changeButton = false;
var aquiz = [
	{category_id: 9, statement: "images/fruits/apple.jpg", options: {A: " سیب " , B: "اسٹرابیری ", C: " مالٹا "}, answer: "A"}, 
	{category_id: 9, statement: "images/fruits/watermelon.jpg", options: {A: " تربوز " , B: "خربوزه ", C: " سیب"}, answer: "A"},
	{category_id: 9, statement: "images/fruits/pineapple.jpg", options: {A: " تربوز " , B: "انناس ", C: " اسٹرابیری "}, answer: "B"},
	{category_id: 9, statement:"images/fruits/cherry.jpg" , options:{A: " تربوز " , B: "انناس ", C: " چیری " }, answer: "C"},
	{category_id: 9, statement: "images/fruits/pear.jpg", options: {A: " سیب " , B: "ناشپاتی ", C: " اسٹرابیری"}, answer: "B"},
	
	{category_id: 14, statement: "images/vegetables/tomato.jpg", options: {A: " ٹماٹر " , B: "مولی  ", C: " آلو "}, answer: "A"},
	{category_id: 14, statement: "images/vegetables/cabbage.jpg", options: {A: " آلو " , B: "گاجر ", C: " بند گوبهی"}, answer: "C"},
	{category_id: 14, statement: "images/vegetables/garlic.jpg", options: {A: "گاجر " , B: "ادرک ", C: " لہسن"}, answer: "C"},
	{category_id: 14, statement: "images/vegetables/carrot.jpg", options: {A: " لوکی " , B: "گاجر ", C: " مولی"}, answer: "B"},
	{category_id: 14, statement: "images/vegetables/radish.jpg", options: {A: "مولی " , B: "لہسن ", C: " گاجر"}, answer: "A"},
	
	{category_id: 10, statement:"images/house/room.jpg" , options:{A: " گلی " , B: "باغ ", C: "کمره" }, answer: "C"},
	{category_id: 10, statement: "images/house/stairs.jpg", options:{A: " سیڑھیاں " , B: "چھت ", C: "باورچی خانه" }, answer: "A"},
	{category_id: 10, statement:"images/house/terrace.jpg" , options:{A: "باورچی خانه " , B: "چھت ", C: " غسلخانه " }, answer: "B"},
	{category_id: 10, statement:"images/house/kitchen.jpg" , options:{A: "باغ " , B: "باورچی خانه ", C: " کمره" }, answer: "B"},
	{category_id: 10, statement:"images/house/bathroom.jpg" , options:{A: " غسلخانه " , B: "کمره ", C: " سیڑھیاں" }, answer: "A"},
	
	{category_id: 3, statement:"images/organs/tongue.jpg" , options:{A: "چہرہ " , B: "دانت ", C: "زبان" }, answer: "C"},
	{category_id: 3, statement:"images/organs/ear.jpg" , options:{A: "کان " , B: "چہرہ ", C: "ناک" }, answer: "A"},
	{category_id: 3, statement:"images/organs/eyes.jpg" , options:{A: "زبان " , B: "آنکھیں ", C: "دانت " }, answer: "B"},
	{category_id: 3, statement:"images/organs/teeth.jpg" , options:{A: "آنکھیں " , B: "دانت ", C: "کان " }, answer: "B"},
	{category_id: 3, statement:"images/organs/nose.jpg" , options:{A: "چہرہ " , B: "ناک ", C: "زبان" }, answer: "B"},
	
	{category_id: 11, statement:"images/people/sister.jpg", options:{A: "چچا " , B: "بہن ", C: "بھائی " }, answer: "B"},
	{category_id: 11, statement:"images/people/father.jpg", options: {A: "بہن " , B: "چاچی ", C: "والد "}, answer: "C"},
	{category_id: 11, statement:"images/people/mother.jpg", options: {A: "بھائی " , B: "ماں ", C: "والد "}, answer: "B"},
	{category_id: 11, statement:"images/people/teacher.jpg", options: {A: "استاد " , B: "استانی ", C: "بھائی "}, answer: "B"},
	{category_id: 11, statement:"images/people/doctor.jpg", options: {A: "ڈاکٹر " , B: "استاد ", C: "بہن"}, answer: "A"},
	
	{category_id: 14, statement: "images/weather/rain.jpg", options: {A: "گرمیاں " , B: "بارش ", C: "بہار "}, answer: "B"},
	{category_id: 14, statement: "images/weather/winter.jpg", options: {A: "سردی " , B: "گرمیاں ", C: "خزاں "}, answer: "A"},
	{category_id: 14, statement: "images/weather/autumn.jpg", options: {A: "بہار " , B: "بارش ", C: "خزاں "}, answer: "C"},
	{category_id: 14, statement: "images/weather/summer.jpg", options: {A: "خزاں " , B: "گرمیاں ", C: "سردی "}, answer: "B"},
	{category_id: 14, statement: "images/weather/spring.jpg", options: {A: "بارش " , B: "گرمیاں ", C: "بہار "}, answer: "C"},
	
	{category_id: 7, statement: "images/drinks/drinks.jpg", options: {A: "پانی " , B: "مشروبات ", C: "رس "}, answer:"B"},
	{category_id: 7, statement: "images/drinks/water.jpg", options: {A: "پانی " , B: "شکنجبین ", C: "چائے "}, answer:"A"},
	{category_id: 7, statement: "images/drinks/rooh-afza.jpg", options: {A: "شکنجبین " , B: "روح افزا  ", C: "دودھ"}, answer:"B"},
	{category_id: 7, statement: "images/drinks/milk.jpg", options: {A: "چائے " , B: "پانی ", C: "دودھ"}, answer:"C"},
	{category_id: 7, statement: "images/drinks/lemonade.jpg", options: {A: "شکنجبین " , B: "چائے ", C: "پانی"}, answer:"A"},
	
	{category_id: 5, statement: "images/colors/green.jpg", options: {A: " سبز " , B: "سرخ ", C: " نیلے"}, answer:"A"},
	{category_id: 5, statement: "images/colors/red.jpg", options: {A: " سیاہ " , B: "گلابی ", C: " سرخ "}, answer:"C"},
	{category_id: 5, statement: "images/colors/pink.jpg", options: {A: " گلابی " , B: "سبز ", C: " نیلے "}, answer:"A"},
	{category_id: 5, statement: "images/colors/blue.jpg", options: {A: " سرخ " , B: "گلابی ", C: " نیلے "}, answer: "C"},
	{category_id: 5, statement: "images/colors/black.jpg", options: {A: "گلابی " , B: "سیاہ ", C: " سبز"}, answer:"B"},
	
	{category_id: 4, statement: "images/city/city.jpg", options: {A: "رکشہ " , B: "شہر ", C: " سڑک"}, answer:"B"},
	{category_id: 4, statement: "images/city/building.jpg", options: {A: "عمارت " , B: "بس ", C: " سڑک"}, answer:"A"},
	{category_id: 4, statement: "images/city/rickshaw.jpg", options: {A: "شہر " , B: "گاڑی ", C: "رکشہ "}, answer:"C"},
	{category_id: 4, statement: "images/city/bus.jpg", options: {A: " گاڑی " , B: "عمارت ", C: "بس "}, answer:"C"},
	{category_id: 4, statement: "images/city/road.jpg", options: {A: " سڑک " , B: "رکشہ ", C: "شہر "}, answer:"A"},
	
	{category_id: 2, statement: "images/animals/animals.jpg", options: {A: "عمارت " , B: "انسان ", C: "جانور "}, answer:"C"},
	{category_id: 2, statement: "images/animals/lion.jpg", options: {A: "شیر " , B: "بلی ", C: "سانپ"}, answer:"A"},
	{category_id: 2, statement: "images/animals/snake.jpg", options: {A: "سانپ " , B: "چھپکلی ", C: "بندر "}, answer:"A"},
	{category_id: 2, statement: "images/animals/elephant.jpg", options: {A: "سانپ " , B: "شیر ", C: " ہاتھی"}, answer:"C"},
	{category_id: 2, statement: "images/animals/monkey.jpg", options: {A: "بلی " , B: "بندر ", C: " چھپکلی "}, answer:"B"},
	
	{category_id: 0, statement: "images/activities/running.jpg", options: {A: "بهاگنا " , B: "چلنا ", C: "مطالع کرنا "}, answer:"A"},
	{category_id: 0, statement: "images/activities/drinking.jpg", options: {A: "سونا " , B: "پینا ", C: "چلنا "}, answer:"B"},
	{category_id: 0, statement: "images/activities/eating.jpg", options: {A: "چلنا " , B: "کھانا ", C: "بهاگنا "}, answer:"B"},
	{category_id: 0, statement: "images/activities/sleeping.jpg", options: {A: "پینا " , B: "مطالع کرنا ", C: "سونا "}, answer:"C"},
	{category_id: 0, statement: "images/activities/studying.jpg", options: {A: "بهاگنا " , B: "کھانا ", C: "مطالع کرنا"}, answer:"C"},

	{category_id: 12, statement: "images/things/bag.jpg", options: {A: "چابی " , B: "بستہ ", C: "جوتے "}, answer:"B"},
	{category_id: 12, statement: "images/things/books.jpg", options: {A: "کتابیں " , B: "جوتے ", C: "گهڑی"}, answer:"A"},
	{category_id: 12, statement: "images/things/clothes.jpg", options: {A: "چابی " , B: "کپڑے ", C: "بستہ "}, answer:"B"},
	{category_id: 12, statement: "images/things/shoes.jpg", options: {A: "کتابیں " , B: "گهڑی ", C: "جوتے"}, answer:"C"},
	{category_id: 12, statement: "images/things/key.jpg", options: {A: "کپڑے " , B: "بستہ ", C: "چابی "}, answer:"C"},

	{category_id: 13, statement: "images/time/clock.jpg", options: {A: "دیکهنا " , B: "شام ", C: " گهڑی"}, answer:"C"},
	{category_id: 13, statement: "images/time/noon.jpg", options: {A: "غروب آفتاب " , B: "دوپہر  ", C: "رات "}, answer:"B"},
	{category_id: 13, statement: "images/time/morning.jpg", options: {A: "شام " , B: "گهڑی ", C: "صبح "}, answer:"C"},
	{category_id: 13, statement: "images/time/night.jpg", options: {A: " رات " , B: "فجر ", C: "دوپہر "}, answer:"A"},
	{category_id: 13, statement: "images/time/evening.jpg", options: {A: "گهڑی " , B: "شام ", C: "فجر "}, answer:"B"},
	
	{category_id: 8, statement: "images/emotions/scared.jpg", options: {A: "دکھی " , B: "ڈرا ہوا ", C: "خوش "}, answer:"B"},
	{category_id: 8, statement: "images/emotions/crying.jpg", options: {A: "رونا " , B: "غصہ ", C: "ہنسی"}, answer:"A"},
	{category_id: 8, statement: "images/emotions/happy.jpg", options: {A: " ڈرا ہوا " , B: "غصہ ", C: "خوش "}, answer:"C"},
	{category_id: 8, statement: "images/emotions/sad.jpg", options: {A: "رونا " , B: "دکھی ", C: " ہنسی"}, answer:"B"},
	{category_id: 8, statement: "images/emotions/angry.jpg", options: {A: "خوش " , B: "ڈرا ہوا ", C: "غصہ "}, answer:"C"}
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
	if ($scope.changeButton == true) {
		$http.post('/addMarks', {marks: markingService.get('score'), owner_id: sessionService.get('user'), category_id: $routeParams.id}).then(function(res){
			if (res.data.message == 'Marking Created') {
				markingService.remove();
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