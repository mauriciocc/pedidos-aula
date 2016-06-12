import BaseService from '../../BaseService';

const baseUri = '/api/stock-entries';


/*@ngInject*/
export default class StockService extends BaseService {

  constructor($http) {
    super(baseUri, $http, StockService.castValues);
  }

  static castValues(stockEntry) {
    stockEntry.value = Number(stockEntry.value);
    stockEntry.date = new Date(stockEntry.date);
    return stockEntry;
  };

};


