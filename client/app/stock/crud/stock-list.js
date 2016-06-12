import template from "./stock-list.html";
import "./stock-list.scss";
import BaseList from '../../BaseList';


/*@ngInject*/
class controller extends BaseList {

  constructor($state, Toast, StockService) {
    super(StockService, Toast, $state, {newEntity: 'stock-form'});
  }

}


export default {
  template,
  controller
};
