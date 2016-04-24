import angular from "angular";
import CustomerService from "./service/CustomerService.js";
import AddressService from "../address/service/AddressService.js";
import uiRouter from "angular-ui-router";
import customerList from "./crud/list.component";
import customerForm from "./crud/form.component.js";

let customerModule = angular.module('customer', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('customers', {
        url: '/customers',
        template: '<customer-list></customer-list>'
      })
      .state('customers-form-new', {
        url: '/customers/form',
        template: '<customer-form></customer-form>'
      })
      .state('customers-form-edit', {
        url: '/customers/form/:id',
        template: '<customer-form></customer-form>'
      });
  })
  .service('CustomerService', CustomerService)
  .service('AddressService', AddressService)
  .component('customerList', customerList)
  .component('customerForm', customerForm);


export default customerModule;
