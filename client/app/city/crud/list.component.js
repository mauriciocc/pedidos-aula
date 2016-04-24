import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(CityService, $mdToast, $state) {
    this.CityService = CityService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();
  }

  refresh() {
    this.CityService.findAll().then((citys) => this.citys = citys);
  }

  remove(id) {
    this.CityService.remove(id).then(() => this.refresh());
  }

  newCity() {
    this.$state.go('citys-form-new');
  }

  edit(id) {
    this.$state.go('citys-form-edit', {id: id});
  }

}


export default {
  template,
  controller
};
