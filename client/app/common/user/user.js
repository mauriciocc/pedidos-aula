import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('user', [])

.factory('UserService', UserFactory);

export default userModule;
