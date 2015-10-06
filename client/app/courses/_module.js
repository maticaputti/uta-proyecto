'use strict';

angular
    .module('CoursesModule', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                // List of courses
                .state('app.courses[list]', {
                    url: '/coursesList',
                    templateUrl: 'app/courses/views/coursesList.html',
                    controller: 'CoursesListCtrl'
                })

                // Create a new course
                .state('app.courses[create]', {
                    url: '/coursesCreate',
                    templateUrl: 'app/courses/views/courseCreate.html',
                    controller: 'CourseCreateCtrl as courseCreate'
                })

            ; // end of $stateProvider

        }) // end of .config

; // end of file

