import angular from "angular";
import uiRouter from "angular-ui-router";
import AuthService from "./AuthService";
import loginComponent from "./login.component";


let userModule = angular.module('auth', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login-page></login-page>'
      })
  })
  .service('AuthService', AuthService)
  .component('loginPage', loginComponent);


export default userModule;
