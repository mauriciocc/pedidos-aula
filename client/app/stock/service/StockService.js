const baseUri = '/api/stock-entries';

const castValues = stockEntry => {
  stockEntry.value = Number(stockEntry.value);
  stockEntry.date = new Date(stockEntry.date);
  return stockEntry;
};


/*@ngInject*/
export default class StockService {

  constructor($http) {
    this.$http = $http;
  }

  findAll() {
    return this.$http.get(baseUri).then(response => response.data.map(castValues));
  };

  findOne (id){
    return this.$http.get(baseUri+'/' + id).then(response => castValues(response.data));
  };

  save(entity) {
    return entity.id
      ? this.$http.put(baseUri+'/' + entity.id, entity)
      : this.$http.post(baseUri, entity);
  };

  remove(entityId) {
    return this.$http.delete(baseUri+'/'+ entityId);
  };
}

