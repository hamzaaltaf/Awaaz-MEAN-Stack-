var myapp = angular.module('AwaazApp', ['ngRoute','ngMaterial'])
    myapp.config(function($routeProvider,$locationProvider,$sceDelegateProvider){
			// $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('');
			$routeProvider
					.when('/', {
							templateUrl: 'templates/menu.html',
							controller: 'userController'
					})
                    .when('/sign-in', {
							templateUrl: 'templates/sign-in.html',
							controller: 'userController'
					})
					.when('/sign-up', {
									templateUrl: 'templates/signup.html',
									controller: 'userController'
					})
					.when('/user/dashboard', {
									templateUrl: 'templates/dashboard.html',
									controller: 'categoriesController'
					})
					.when('/category/add', {
							templateUrl: 'templates/add_category.html',
							controller: 'categoriesController'
					})
					.when('/category/:id', {
							templateUrl: 'templates/category.html',
							controller: 'wordsController'						
					})
                    .when('/category/:id/quiz/:qid', {
							templateUrl: 'templates/quiz.html',
							controller: 'quizzesController'						
					})
    
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://www.transltr.org/**'
  ]);
    })
myapp.service('userDataService', function() {
  var user_id;
  
  var assignUserId = function(id) {
      user_id = id
      console.log('Called and now the user_id is ' + user_id)
  };
  var getUserId = function(){
      console.log('Called and returning the value ' + user_id)
      return user_id;
  };
  return {
    assignUserId: assignUserId,
    getUserId: getUserId
  };
});

myapp.factory('sessionService',['$http', function(){
  return {
    set: function(key, value){
        console.log('This is Key ' + key + ' ' + 'Value ' + value);
        sessionStorage.setItem(key,value)
    },
    get: function(key) {
        console.log('Called with the key ' + key);
        console.log(sessionStorage.getItem(key))
        return sessionStorage.getItem(key)
    },

    destroy: function(key) {
        return sessionStorage.removeItem(key)
    }
  }  
}])

myapp.factory('markingService',['$http', function(){
  var marks = 0;
//   localStorage.setItem('score',marks)
  return {
    increment: function(){
        marks++;
        localStorage.setItem('score',marks)
        console.log('amarks are ' + marks)
    },
    get: function() {
        return localStorage.getItem('score');
    },
    remove: function() {
        return localStorage.removeItem('score');
    }
  }  
}])

// for translation of words
myapp.factory('translationService',['$http', function($http){
  var translatedtext = 0;
  return {
    callTranslator: function(word){
        console.log('This is word')
        $http.post('http://www.transltr.org/api/translate?text='+word+'&to=ur').then(function(res){
            console.log('This is response of translation api ' + res);
            return res;
     })
    }
  }  
}])

.directive('getTranslatedText', function($http,$sce){
  return {
    scope: {
      word: '@word'
    },
    link: function(scope, element, attrs) {
      console.log('This is word ' + scope.word)
      $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170507T015000Z.92c42fb2bb34d444.c8f9b04444750d358fc0e3383a7e70e198f8fffd&text='+scope.word+'&lang=en-ur&format=plain&options=0').
      then(function (res, status, headers, config) {
        scope.translated = res.data.text[0];
        
        console.log(res.data)
        console.log(res.data.text[0])
      }, function(err, status, headers, config){
          console.log('err');
      });
    },
    template: '<h2 ng-bind="translated"></h2>'
  }
});