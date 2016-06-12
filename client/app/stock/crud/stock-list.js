import template from "./stock-list.html";
import "./stock-list.scss";


/*@ngInject*/
class controller {

  constructor($state, Toast, StockService) {
    this.Toast = Toast;
    this.$state = $state;
    this.StockService = StockService;
    this.StockService.findAll().then(data => this.stockEntries = data);
  }

  newStockEntries() {
    this.$state.go('stock-form');
  }

  remove(stockItem) {
    this.StockService.remove(stockItem.id).then(() => _.remove(this.stockEntries, {id: stockItem.id}));
  }

}


export default {
  template,
  controller
};
