import template from "./sale-form.html";
import _ from "lodash";

class Sale {

  constructor() {
    this.date = new Date();
    this.items = [];
  }
}

class Item {
  constructor() {
    this.type = 'OUT';
  }
}

/*@ngInject*/
class controller {

  constructor($state, Toast, ProductService, SaleService, CustomerService) {
    this.Toast = Toast;
    this.$state = $state;
    this.ProductService = ProductService;
    this.CustomerService = CustomerService;
    this.SaleService = SaleService;
    this.ProductService.findAll().then(data => this.products = data);
    this.CustomerService.findAll().then(data => this.customers = data);

    this.sale = new Sale();
    this.item = new Item();
  }

  save() {
    if (!this.sale.customer) {
      this.Toast.warning('Selecione um cliente...');
      return;
    }

    if (this.sale.items.length === 0) {
      this.Toast.warning('Adicione pelo menos um item ao pedido...');
      return;
    }

    var sale = _.cloneDeep(this.sale);
    sale.customerId = sale.customer.id;
    sale.customer = null;
    sale.paid = 'N';
    sale.items = sale.items.map(i => {
      i.date = sale.date;
      i.productId = i.product.id;
      i.product = null;
      return i
    });
    this.SaleService.save(sale).then(() => {
      this.Toast.success('Objeto salvo com sucesso!');
      this.$state.go('sales');
    }).catch(e => {
      var message = 'Erro ao salvar objeto: \n';
      if (_.isObject(e)) {
        e.data.errors.forEach(error => {
          var product = _.find(this.products, {id: error.productId});
          message += 'Faltam ' +Math.abs(error.total) + ' itens do produto '+product.name +' para atender o pedido.';
        });

      } else {
        message += e;
      }
      this.Toast.danger(message);
    });

  }

  addItem() {
    this.sale.items.push(this.item);
    this.item = new Item();
  }

  removeStockItem(item) {
    _.remove(this.sale.items, item);
  }

  productChanged(item) {
    this.item.value = item.value;
    this.item.quantity = this.item.quantity || 1;
  }

}


export default {
  template,
  controller
};
