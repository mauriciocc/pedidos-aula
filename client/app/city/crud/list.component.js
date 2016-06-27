import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(CityService, $mdToast, $state, $scope) {
    this.CityService = CityService;
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
