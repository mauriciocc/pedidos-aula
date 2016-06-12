import template from "./sale-list.html";
import BaseList from '../../BaseList';


/*@ngInject*/
class controller extends BaseList {

  constructor($state, Toast, SaleService) {
    super(SaleService, Toast, $state, {newEntity: 'sale-form'});
  }

}

export default {
  template,
  controller
};
