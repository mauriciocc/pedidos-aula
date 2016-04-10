import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import headerComponent from './header.component';

let navbarModule = angular.module('navbar', [
  uiRouter
])
.component('navbar', navbarComponent)
.component('headerComponent', headerComponent);

export default navbarModule;
