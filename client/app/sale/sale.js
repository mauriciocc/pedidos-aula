import angular from "angular";
import uiRouter from "angular-ui-router";
import SaleService from "./service/SaleService";
import saleForm from './crud/sale-form';
import saleList from "./crud/sale-list";


export default angular.module('app.sale.module', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('sales', {
        url: '/sales',
        template: '<sale-list></sale-list>'
      })
      .state('sale-form', {
        url: '/sales/form',
        template: '<sale-form></sale-form>'
      });
  })
  .service('SaleService', SaleService)
  .component('saleForm', saleForm)
  .component('saleList', saleList)
;
