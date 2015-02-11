'use strict';

angular.module('fsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


