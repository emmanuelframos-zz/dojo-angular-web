angular.module('people').controller('PeopleController', ['MonthsFactory', 'PeopleService', '$location', function (MonthsFactory, PeopleService, $location) {

    vm = this;
    vm.people;

    function init() {
        vm.getPeople();
    }

    vm.getMonths = function () {
        return MonthsFactory.months;
    }

    vm.getPeople = function () {
        PeopleService.getPeople().then(function (success) {
            vm.people = success.data;
        }, function (error) {
            console.error(error);
        });
    }

    vm.getPeoplePrize = function () {
        $location.path('/listPeoplePrize');
    }

    init();

}]);