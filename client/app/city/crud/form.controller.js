/*@ngInject*/
class CityFormController {

  constructor(CityService, $mdToast, $mdDialog, $stateParams) {
    this.CityService = CityService;
    this.$mdToast = $mdToast;
    this.$mdDialog = $mdDialog;
    this.$stateParams = $stateParams;
    if ($stateParams.id) {
      CityService.findOne($stateParams.id).then((city) => this.city = city);
    } else {
      this.city = {};
    }
  }

  refresh() {
    this.CityService.findAll().then((citys) => this.citys = citys);
  }

  save() {
    this.CityService.save(this.city).then(() => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Cidade salvo com sucesso!')
          .position('top right')
          .theme("success-toast")
      );
      this.refresh();
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar a cidade!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
    });
  }

  remove(id) {
    this.CityService.remove(id).then(() => this.refresh());
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

export default CityFormController;
