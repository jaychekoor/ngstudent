'use strict';

// @auth Jaya
/*Student CRUD Controllers */

var app = angular.module('ngstudent.controllers', []);


// Clear browser cache (in development mode)
//
// http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine
app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('DummyCtrl', ['$scope', 'DummyFactory', function ($scope, DummyFactory) {
   
    $scope.dummy = 'dummy data';
    $scope.firstname = 'Jayasree';
    $scope.lastname = 'Chekoor';
    DummyFactory.get({}, function (dummyFactory) {
        $scope.dummy = dummyFactory.query();
        
    })
}]);

app.controller('StudentListCtrl', ['$scope', 'StudentsFactory', 'StudentFactory', '$location',
    function ($scope, StudentsFactory, StudentFactory, $location) {

        // callback for 'editStudent':
        $scope.editStudent = function (studentId) {
            $location.path('/student-detail/' + studentId);
        };

        // callback for 'deleteStudent':
        $scope.deleteStudent = function (studentId) {
            StudentFactory.delete({ id: studentId });
            $scope.students = StudentsFactory.query();
        };

        // callback for 'createStudent':
        $scope.createStudent = function () {
            $location.path('/student-creation');
        };

        $scope.students = StudentsFactory.query();
    }]);

app.controller('StudentDetailCtrl', ['$scope', '$routeParams', 'StudentFactory', '$location',
    function ($scope, $routeParams, StudentFactory, $location) {

        // callback for'updateStudent':
        $scope.updateStudent = function () {
            StudentFactory.update($scope.student);
            $location.path('/student-list');
        };

        // callback 'cancel':
        $scope.cancel = function () {
            $location.path('/student-list');
        };

        $scope.student = StudentFactory.show({id: $routeParams.id});
    }]);

app.controller('StudentCreationCtrl', ['$scope', 'StudentsFactory', '$location',
    function ($scope, StudentsFactory, $location) {

        // callback for 'createStudent':
        $scope.createStudent = function () {
            alert('student'+ $scope.student);
            StudentsFactory.create($scope.student);
            $location.path('/student-list');
        }
    }]);
