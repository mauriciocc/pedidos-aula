import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(AuditingService, $mdToast, $state, $scope) {
    this.AuditingService = AuditingService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();

    this.$scope = $scope;
    this.$scope.limitOptions = [10, 20, 50];

    this.$scope.options = {
      rowSelection: false,
      multiSelect: false,
      autoSelect: true,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: true,
      limitSelect: true,
      pageSelect: true
    };

    this.$scope.query = {
      order: 'createdAt',
      limit: 10,
      page: 1
    };
  }

  refresh() {
    this.AuditingService.findAll().then((auditings) => this.auditings = auditings);
  }


}


export default {
  template,
  controller
};
