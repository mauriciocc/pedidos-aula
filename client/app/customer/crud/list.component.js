import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(CustomerService, $mdToast, $state) {
    this.CustomerService = CustomerService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();
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
