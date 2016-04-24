import angular from "angular";
import AddressService from "./service/AddressService.js";
import CityService from "../city/service/CityService.js";
import uiRouter from "angular-ui-router";
import addressList from "./crud/list.component";
import addressForm from "./crud/form.component.js";

let addressModule = angular.module('address', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('addresss', {
        url: '/addresss',
        template: '<address-list></address-list>'
      })
      .state('addresss-form-new', {
        url: '/addresss/form',
        template: '<address-form></address-form>'
      })
      .state('addresss-form-edit', {
        url: '/addresss/form/:id',
        template: '<address-form></address-form>'
      });
  })
  .service('AddressService', AddressService)
  .service('CityService', CityService)
  .component('addressList', addressList)
  .component('addressForm', addressForm);


export default addressModule;
