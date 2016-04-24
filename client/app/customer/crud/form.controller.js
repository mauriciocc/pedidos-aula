class AddressEntry {

  constructor() {
    this.items = [];
  }

}

/*@ngInject*/
class CustomerFormController {

  constructor(CustomerService, AddressService, CityService, $mdToast, $mdDialog, $state, $stateParams) {
    this.CustomerService = CustomerService;
    this.AddressService = AddressService;
    this.CityService = CityService;
    this.$mdToast = $mdToast;
    this.$mdDialog = $mdDialog;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.loadAddresss();
    this.loadCitys();
    this.addressEntry = new AddressEntry();
    if ($stateParams.id) {
      CustomerService.findOne($stateParams.id).then((customer) => this.customer = customer);
    } else {
      this.customer = {};
    }
  }

  loadAddresss() {
    this.AddressService.findAll().then((addresss) => this.addresss = addresss);
  }

  loadCitys() {
    this.CityService.findAll().then((city) => this.city = city);
  }

  addAddressItem() {
    this.addressEntry.items.push(this.addressItem);
    this.addressItem = null;
  }

  removeAddressItem(item) {
    _.remove(this.addressEntry.items, item);    
  }

  save() {
    this.CustomerService.save(this.customer).then(() => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Cliente salvo com sucesso!')
          .position('top right')
          .theme("success-toast")
      );
      this.$state.go('customers');
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar o cliente!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
    });
  }

}

export default CustomerFormController;
