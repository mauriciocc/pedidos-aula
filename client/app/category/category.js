import angular from "angular";
import CategoryService from "./service/CategoryService.js";
import uiRouter from "angular-ui-router";
import categoryList from "./crud/list.component";
import categoryForm from "./crud/form.component.js";

let categoryModule = angular.module('category', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('categorys', {
        url: '/categorys',
        template: '<category-list></category-list>'
      })
      .state('categorys-form-new', {
        url: '/categorys/form',
        template: '<category-form></category-form>'
      })
      .state('categorys-form-edit', {
        url: '/categorys/form/:id',
        template: '<category-form></category-form>'
      });
  })
  .service('CategoryService', CategoryService)
  .component('categoryList', categoryList)
  .component('categoryForm', categoryForm);


export default categoryModule;
