var myapp = angular.module('AwaazApp', ['ngRoute','ngMaterial'])
    myapp.config(function($routeProvider,$locationProvider){
			$locationProvider.hashPrefix('');
			$routeProvider
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
    }
  }  
}])