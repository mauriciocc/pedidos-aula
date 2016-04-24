import template from "./stock-list.html";
import "./stock-list.scss";


/*@ngInject*/
class controller {

  constructor($state, Toast) {
    this.Toast = Toast;
    this.$state = $state;
  }

  newStockEntries() {
    this.$state.go('stock-form');
  }

}


export default {
  template,
  controller
};
