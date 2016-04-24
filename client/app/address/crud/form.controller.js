/*@ngInject*/
class AddressFormController {

  constructor(AddressService, CityService, $mdToast, $mdDialog, $state, $stateParams) {
    this.AddressService = AddressService;
    this.CityService = CityService;
    this.$mdToast = $mdToast;
    this.$mdDialog = $mdDialog;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.loadCitys();
    if ($stateParams.id) {
      AddressService.findOne($stateParams.id).then((address) => this.address = address);
    } else {
      this.address = {};
    }
  }

  loadCitys() {
    this.CityService.findAll().then((citys) => this.citys = citys);
  }

  save() {
    this.AddressService.save(this.address).then(() => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Endereço salvo com sucesso!')
          .position('top right')
          .theme("success-toast")
      );
      this.$state.go('addresss');
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar o endereço!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
    });
  }

}

export default AddressFormController;
