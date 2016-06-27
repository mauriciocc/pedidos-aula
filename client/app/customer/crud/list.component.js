import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(CustomerService, $mdToast, $state, $scope) {
    this.CustomerService = CustomerService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();

    this.$scope = $scope;
    this.$scope.limitOptions = [10, 20, 30];
    this.$scope.selected = [];

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
      order: 'name',
      limit: 10,
      page: 1
    };
  }

  refresh() {
    this.CustomerService.findAll().then((customers) => this.customers = customers);
  }

  remove(id) {
    this.CustomerService.remove(id).then(() => this.refresh());
  }

  newCustomer() {
    this.$state.go('customers-form-new');
  }

  edit(id) {
    this.$state.go('customers-form-edit', {id: id});
  }

}


export default {
  template,
  controller
};
