/*@ngInject*/
class ProductFormController {

  constructor(ProductService, CategoryService, $mdToast, $mdDialog, $state, $stateParams) {
    this.ProductService = ProductService;
    this.CategoryService = CategoryService;
    this.$mdToast = $mdToast;
    this.$mdDialog = $mdDialog;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.loadCategorys();
    if ($stateParams.id) {
      ProductService.findOne($stateParams.id).then((product) => this.product = product);
    } else {
      this.product = {};
    }
  }

  loadCategorys() {
    this.CategoryService.findAll().then((categorys) => this.categorys = categorys);
  }

  save() {
    this.ProductService.save(this.product).then(() => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Produto salvo com sucesso!')
          .position('top right')
          .theme("success-toast")
      );
      this.$state.go('products');
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar o produto!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
    });
  }

}

export default ProductFormController;
