import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(AddressService, $mdToast, $state) {
    this.AddressService = AddressService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();
  }

  refresh() {
    this.AddressService.findAll().then((addresss) => this.addresss = addresss);
  }

  remove(id) {
    this.AddressService.remove(id).then(() => this.refresh());
  }

  newAddress() {
    this.$state.go('addresss-form-new');
  }

  edit(id) {
    this.$state.go('addresss-form-edit', {id: id});
  }

}


export default {
  template,
  controller
};
