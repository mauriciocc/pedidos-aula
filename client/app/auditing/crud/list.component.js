import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(AuditingService, $mdToast, $state) {
    this.AuditingService = AuditingService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();
  }

  refresh() {
    this.AuditingService.findAll().then((auditings) => this.auditings = auditings);
  }


}


export default {
  template,
  controller
};
