import angular from "angular";
import ProductService from "./service/ProductService.js";
import CategoryService from "../category/service/CategoryService.js";
import uiRouter from "angular-ui-router";
import productList from "./crud/list.component";
import productForm from "./crud/form.component.js";

let productModule = angular.module('product', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('products', {
        url: '/products',
        template: '<product-list></product-list>'
      })
      .state('products-form-new', {
        url: '/products/form',
        template: '<product-form></product-form>'
      })
      .state('products-form-edit', {
        url: '/products/form/:id',
        template: '<product-form></product-form>'
      });
  })
  .service('ProductService', ProductService)
  .service('CategoryService', CategoryService)
  .component('productList', productList)
  .component('productForm', productForm);


export default productModule;
