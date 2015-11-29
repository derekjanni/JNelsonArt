var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/series/:id',{
	    // Todo: edit to series/art framework
      controller: 'PhotoController',
      templateUrl: 'views/serie.html'
  })
     .when('/contact',{
	     // Todo: make Contact controller
       controller: 'ContactController',
       templateUrl: 'contact.html'
  })
     .when('/about',{
	     // Todo: make about controller
      controller: 'AboutController',
      templateUrl: 'contact.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

