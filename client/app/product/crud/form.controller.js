/*@ngInject*/
class ProductFormController {

  constructor(ProductService, CategoryService, $mdToast, $mdDialog, $stateParams) {
    this.ProductService = ProductService;
    this.CategoryService = CategoryService;
    this.$mdToast = $mdToast;
    this.$mdDialog = $mdDialog;
    this.$stateParams = $stateParams;
    this.loadCategorys();
    if ($stateParams.id) {
      ProductService.findOne($stateParams.id).then((product) => this.product = product);
    } else {
      this.product = {};
    }
  }

  refresh() {
    this.ProductService.findAll().then((products) => this.products = products);
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
      this.refresh();
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar o produto!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
    });
  }

  remove(id) {
    this.ProductService.remove(id).then(() => this.refresh());
  }

  edit(id) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ok('Salvar')
    );
  }

}

export default ProductFormController;
