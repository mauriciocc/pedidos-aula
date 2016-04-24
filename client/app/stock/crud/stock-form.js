import template from "./stock-form.html";
import "./stock-form.scss";
import _ from "lodash";

class StockEntry {

  constructor() {
    this.items = [];
  }

}

/*@ngInject*/
class controller {

  constructor($state, Toast) {
    this.Toast = Toast;
    this.$state = $state;
    this.stockEntry = new StockEntry()
  }

  addStockItem() {
    this.stockEntry.items.push(this.stockItem);
    this.stockItem = null;
  }

  removeStockItem(item) {
    _.remove(this.stockEntry.items, item);    
  }

}


export default {
  template,
  controller
};
