/*@ngInject*/
let ProductFactory = function ($http) {

  var castValues = p => {
    p.value = Number(p.value);
    return p;
  };

  this.findAll = () => {

    return $http.get('/api/products').then(response => response.data.map(castValues));
  };

  this.findOne = (id) => {
    return $http.get('/api/products/' + id).then(response => castValues(response.data));
  };

  this.save = (product) => {
    return product.id
      ? $http.put('/api/products/' + product.id, product)
      : $http.post('/api/products', product);
  };

  this.remove = (productId) => {
    return $http.delete('/api/products/' + productId);
  };

};

export default ProductFactory;
