var app = angular.module('GalleryApp', ['ngRoute','ngAnimate']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/series/:id',{
      controller: 'SerieController',
      templateUrl: 'views/serie.html'
  })
     .when('/contact',{
       controller: 'ContactController',
       templateUrl: 'views/contact.html'
  })
     .when('/about',{
      controller: 'HomeController',
      templateUrl: 'views/about.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
      
});


