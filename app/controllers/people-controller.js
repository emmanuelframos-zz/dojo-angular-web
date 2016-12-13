angular.module('people').controller('PeopleController', ['MonthsFactory', 'PeopleService', function (MonthsFactory, PeopleService) {
    
    vm = this;  
    
    vm.getMonths = function(){
        return MonthsFactory.months;
    }   

    vm.getPeople = function(){
        PeopleService.getPeople().then(function(success) {
            vm.people = success.data;
        }, function(error) {
            console.error(error);
        })
    }

    function init(){
        vm.getPeople();
    }

    init();
}]);