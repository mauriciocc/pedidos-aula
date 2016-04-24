/*@ngInject*/
class CategoryFormController {

  constructor(CategoryService, $mdToast, $mdDialog, $state, $stateParams) {
    this.CategoryService = CategoryService;
    this.$mdToast = $mdToast;
    this.$mdDialog = $mdDialog;
    this.$state = $state;
    this.$stateParams = $stateParams;
    if ($stateParams.id) {
      CategoryService.findOne($stateParams.id).then((category) => this.category = category);
    } else {
      this.category = {};
    }
  }

  refresh() {
    this.CategoryService.findAll().then((categorys) => this.categorys = categorys);
  }

  save() {
    this.CategoryService.save(this.category).then(() => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Categoria salvo com sucesso!')
          .position('top right')
          .theme("success-toast")
      );
      this.$state.go('categorys');
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar a categoria!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
    });
  }

  remove(id) {
    this.CategoryService.remove(id).then(() => this.refresh());
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

export default CategoryFormController;
