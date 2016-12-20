var app = angular.module('people', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "app/pages/listPeople.html"                  
        })
        .when("/listPeoplePrize", {
            templateUrl : "app/pages/listPeoplePrize.html",
        });
});