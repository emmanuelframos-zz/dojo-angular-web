angular.module('people').controller('peopleController', ['monthsFactory', function (monthFactory) {
    
    vm = this;

    vm.people = [{ login: 'EMMANUELF', name: 'Emmanuel Ramos', age: 31, birthDate: '1985-11-29', salary: 8500.99, months: [{'desc': 'aug', 'value': 33}, {'desc': 'sep', 'value': 33}, {'desc': 'oct', 'value': 33}] },
        { login: 'MVIDOLIN', name: 'Marcos Vidolin', age: 28, birthDate: '1988-05-03', salary: 10600.45, months: [{'desc': 'aug', 'value': 33}, {'desc': 'sep', 'value': 33}, {'desc': 'oct', 'value': 33}] },
        { login: 'ALAN', name: 'Alan Thiago', age: 31, birthDate: '1985-05-12', salary: 9400.31, months: [{'desc': 'aug', 'value': 33}, {'desc': 'sep', 'value': 33}, {'desc': 'oct', 'value': 33}] },
        { login: 'LUIZSJ', name: 'Luiz Souza', age: 26, birthDate: '1992-09-01', salary: 9250.23, months: [{'desc': 'aug', 'value': 33}, {'desc': 'sep', 'value': 33}, {'desc': 'oct', 'value': 33}] }
        ];
    
    vm.loadMonth = function(){
        return monthFactory.months;
    }   

}]);