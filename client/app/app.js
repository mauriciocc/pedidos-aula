import "normalize.css/normalize.css";
import "angular-material/angular-material.scss";
import "angular-material-data-table/dist/md-data-table.min.css";
import "font-awesome/scss/font-awesome.scss";
import "material-design-lite/material.min.js";
import "material-design-lite/material.min.css";
  
import angular from "angular";
import angularCookies from "angular-cookies";
import uiRouter from "angular-ui-router";
import ngMaterial from "angular-material";
import ngDataTable from "angular-material-data-table";
import AppComponent from "./app.component";
import user from "./user/user";
import category from "./category/category";
import product from "./product/product";
import navbar from "./navbar/navbar";
import home from "./home/home";
import auth from "./auth/auth";

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngDataTable,
    angularCookies,
    navbar.name,
    home.name,
    user.name,
    category.name,
    product.name,
    auth.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(function ($mdThemingProvider) {
    "ngInject";
    $mdThemingProvider.theme('success-toast');
    $mdThemingProvider.theme('warn-toast');
    $mdThemingProvider.theme('danger-toast');
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    "ngInject";
    $urlRouterProvider.otherwise("/login");
  })
  .component('app', AppComponent)
  .run(function ($rootScope, $state, AuthService) {
    "ngInject";
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
      if (!AuthService.isAuthenticated() && toState.name !== 'login') {
        $state.transitionTo("login");
        event.preventDefault();
      }
    });
  });
