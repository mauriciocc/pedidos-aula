import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(CategoryService, $mdToast, $state, $scope) {
    this.CategoryService = CategoryService;
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
    this.CategoryService.findAll().then((categorys) => this.categorys = categorys);
  }

  remove(id) {
    this.CategoryService.remove(id).then(() => this.refresh());
  }

  newCategory() {
    this.$state.go('categorys-form-new');
  }

  edit(id) {
    this.$state.go('categorys-form-edit', {id: id});
  }

}


export default {
  template,
  controller
};
