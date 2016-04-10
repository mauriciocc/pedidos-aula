import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(ProductService, $mdToast, $state) {
    this.ProductService = ProductService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    this.refresh();
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
