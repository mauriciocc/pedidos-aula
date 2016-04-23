import angular from "angular";
import uiRouter from "angular-ui-router";
import StockService from "./service/StockService";
import stockForm from "./crud/stock-form";


export default angular.module('app.stock.module', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('stock', {
        url: '/stock',
        template: '<stock-form></stock-form>'
      })
      .state('stock.form', {
        url: '/form',
        template: '<stock-form></stock-form>'
      });
  })
  .service('StockService', StockService)
  .component('stockForm', stockForm)
;
