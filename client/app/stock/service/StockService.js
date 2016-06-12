import BaseService from '../../BaseService';
import moment from "moment";

const baseUri = '/api/stock-entries';


/*@ngInject*/
export default class StockService extends BaseService {

  constructor($http) {
    super(baseUri, $http, StockService.castValues);
  }

  static castValues(stockEntry) {
    stockEntry.value = Number(stockEntry.value);
    stockEntry.date = moment(stockEntry.date, 'YYYY-MM-DD').toDate();
    return stockEntry;
  };

};


