import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(CategoryService, $mdToast, $state) {
    this.CategoryService = CategoryService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();
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
