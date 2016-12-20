angular.module('people').controller('PeoplePrizeController', ['PeopleService', function (PeopleService) {
    
    vm = this;
    vm.peoplePrize;  

    function init(){
        vm.getPeoplePrize();
    } 

    vm.getPeoplePrize = function(){
        PeopleService.getPeoplePrize().then(function(success){
            vm.peoplePrize = success.data;
        }, function(error){
            console.error(error);
        });        
    }

    init();

}]);

