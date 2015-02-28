'use strict';

/* Services */

/*
@auth jayasree
Does the CRUD Operations for Student Object

 */


var baseURL =  'http://localhost:8080/Student-1.0.0-BUILD-SNAPSHOT/';

var services = angular.module('ngstudent.services', ['ngResource']);

services.factory('DummyFactory', function ($resource) {
    return $resource(baseURL+'rest/student/dummy', {}, {
      query: { method: 'GET', params: {}, isArray: false }
    })
});

services.factory('StudentsFactory', function ($resource) {
    return $resource(baseURL+'rest/student/create', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('StudentFactory', function ($resource) {
    return $resource(baseURL+'/rest/students/student/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
