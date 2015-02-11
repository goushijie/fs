'use strict';

angular.module('fsApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
