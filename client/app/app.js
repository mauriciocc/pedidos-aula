import 'normalize.css';
import 'angular-material/angular-material.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import AppComponent from './app.component';
import user from './user/user'
import navbar from './navbar/navbar'
import home from './home/home'

angular.module('app', [
    uiRouter,
    navbar.name,
    home.name,
    user.name,
    'ngMaterial'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
