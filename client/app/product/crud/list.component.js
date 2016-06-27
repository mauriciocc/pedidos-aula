import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(ProductService, $mdToast, $state, $scope) {
    this.ProductService = ProductService;
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
    this.ProductService.findAll().then((products) => this.products = products);
  }

  remove(id) {
    this.ProductService.remove(id).then(() => this.refresh());
  }

  newProduct() {
    this.$state.go('products-form-new');
  }

  edit(id) {
    this.$state.go('products-form-edit', {id: id});
  }

}


export default {
  template,
  controller
};
