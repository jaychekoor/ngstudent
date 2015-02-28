'use strict';

// Declare app level module for Student module
// @auth Jaya
angular.module('ngstudent', ['ngstudent.filters', 'ngstudent.services', 'ngstudent.directives', 'ngstudent.controllers']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dummy', {templateUrl: 'partials/dummy.html', controller: 'DummyCtrl'});
        $routeProvider.when('/student-list', {templateUrl: 'partials/student-list.html', controller: 'StudentListCtrl'});
        $routeProvider.when('/student-detail/:id', {templateUrl: 'partials/student-detail.html', controller: 'StudentDetailCtrl'});
        $routeProvider.when('/student-creation', {templateUrl: 'partials/student-creation.html', controller: 'StudentCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/dummy'});
    }]);
