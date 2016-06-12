import template from "./stock-form.html";
import "./stock-form.scss";
import _ from "lodash";
import Promise from "bluebird";

class StockEntry {

  constructor() {
    this.date = new Date();
    this.type = 'IN';
    this.items = [];
  }

}

/*@ngInject*/
class controller {

  constructor($state, Toast, ProductService, StockService) {
    this.Toast = Toast;
    this.$state = $state;
    this.stockEntry = new StockEntry();
    this.ProductService = ProductService;
    this.StockService = StockService;

    this.ProductService.findAll().then(data => this.products = data);
  }

  save() {
    var items = _.clone(this.stockEntry.items).map(i => {
      i.date = this.stockEntry.date;
      i.type = this.stockEntry.type;
      i.productId = i.product.id;
      i.product = null;
      return this.StockService.save(i);
    });

    Promise.all(items).then(() => {
      this.$state.go('stock');
    });

  }

  addStockItem() {
    this.stockEntry.items.push(this.stockItem);
    this.stockItem = null;
  }

  removeStockItem(item) {
    _.remove(this.stockEntry.items, item);
  }

  productChanged(item) {
    this.stockItem.value = item.value;
    this.stockItem.quantity = this.stockItem.quantity || 1;
  }

}


export default {
  template,
  controller
};
