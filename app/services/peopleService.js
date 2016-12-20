angular.module('people').service('PeopleService',function($http){

    var self = this;     
     
    self.getPeople = function(){
        return $http.get('http://localhost:8080/api/v1/people');
    }

    self.getPeoplePrize = function(){
        return $http.get('http://localhost:8080/api/v1/people/prize');
    }
});