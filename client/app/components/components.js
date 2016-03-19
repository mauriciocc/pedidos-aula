import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import UserForm from './userForm/userForm';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  UserForm.name
]);

export default componentModule;
