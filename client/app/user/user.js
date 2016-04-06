import angular from "angular";
import UserService from "./service/UserService.js";
import uiRouter from "angular-ui-router";
import userList from "./crud/list.component";
import userForm from "./crud/form.component.js";

let userModule = angular.module('user', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('users', {
        url: '/users',
        template: '<user-list></user-list>'
      })
      .state('users-form-new', {
        url: '/users/form',
        template: '<user-form></user-form>'
      })
      .state('users-form-edit', {
        url: '/users/form/:id',
        template: '<user-form></user-form>'
      });
  })
  .service('UserService', UserService)
  .component('userList', userList)
  .component('userForm', userForm);


export default userModule;
