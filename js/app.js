var app = angular.module('GalleryApp', ['ngRoute']);

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
      controller: 'AboutController',
      templateUrl: 'views/about.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

