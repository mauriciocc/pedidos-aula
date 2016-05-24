import angular from "angular";
import AuditingService from "./service/AuditingService.js";
import uiRouter from "angular-ui-router";
import auditingList from "./crud/list.component";

let auditingModule = angular.module('auditing', [uiRouter])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('auditings', {
        url: '/auditings',
        template: '<auditing-list></auditing-list>'
      });
  })
  .service('AuditingService', AuditingService)
  .component('auditingList', auditingList);


export default auditingModule;
