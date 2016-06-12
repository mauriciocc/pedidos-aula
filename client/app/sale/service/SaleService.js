const baseUri = '/api/sales';
import BaseService from '../../BaseService';
import StockService from '../../stock/service/StockService';

/*@ngInject*/
export default class SaleService extends BaseService {

  constructor($http) {
    super(baseUri, $http, SaleService.castValues);
  }
  
  static castValues(sale){
    sale.date = new Date(sale.date);
    sale.items.forEach(StockService.castValues);
    return sale;
  };

};

