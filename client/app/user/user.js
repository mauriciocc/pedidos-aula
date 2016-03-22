import angular from 'angular';
import UserFactory from './service/user.factory';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm/userForm.component'

let userModule = angular.module('user', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('userForm', {
        url: '/user/form',
        template: '<user-form></user-form>'
      });
  })
  .factory('UserService', UserFactory)
  .component('userForm', userFormComponent);


export default userModule;
