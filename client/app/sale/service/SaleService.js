const baseUri = '/api/sales';
import BaseService from '../../BaseService';
import StockService from '../../stock/service/StockService';
import moment from "moment";

/*@ngInject*/
export default class SaleService extends BaseService {

  constructor($http) {
    super(baseUri, $http, SaleService.castValues);
  }

  static castValues(sale){
    sale.date = moment(sale.date, 'YYYY-MM-DD').toDate();
    sale.items.forEach(StockService.castValues);
    return sale;
  };

};

