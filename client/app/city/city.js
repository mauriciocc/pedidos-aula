import angular from "angular";
import CityService from "./service/CityService.js";
import uiRouter from "angular-ui-router";
import cityList from "./crud/list.component";
import cityForm from "./crud/form.component.js";

let cityModule = angular.module('city', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('citys', {
        url: '/citys',
        template: '<city-list></city-list>'
      })
      .state('citys-form-new', {
        url: '/citys/form',
        template: '<city-form></city-form>'
      })
      .state('citys-form-edit', {
        url: '/citys/form/:id',
        template: '<city-form></city-form>'
      });
  })
  .service('CityService', CityService)
  .component('cityList', cityList)
  .component('cityForm', cityForm);


export default cityModule;
