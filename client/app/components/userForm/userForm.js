import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm.component';
import user from '../../common/user/user';

let userFormModule = angular.module('userForm', [
  uiRouter,
  user.name
])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('userForm', {
        url: '/userform',
        template: '<user-form></user-form>'
      });
  })
.component('userForm', userFormComponent);

export default userFormModule;
