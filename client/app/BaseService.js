export default class BaseService {

  constructor(baseUri, $http, castValues) {
    this.$http = $http;
    this.baseUri = baseUri;
    this.castValues = castValues;
  }

  findAll() {
    return this.$http.get(this.baseUri).then(response => response.data.map(this.castValues));
  };

  findOne(id) {
    return this.$http.get(this.baseUri + '/' + id).then(response => this.castValues(response.data));
  };

  save(entity) {
    return entity.id
      ? this.$http.put(this.baseUri + '/' + entity.id, entity)
      : this.$http.post(this.baseUri, entity);
  };

  remove(entityId) {
    return this.$http.delete(this.baseUri + '/' + entityId);
  };

}
