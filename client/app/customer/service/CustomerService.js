/*@ngInject*/
let CustomerFactory = function ($http) {

  this.findAll = () => {
    return $http.get('/api/customers').then(response => response.data);
  };

  this.findOne = (id) => {
    return $http.get('/api/customers/' + id).then(response => response.data);
  };

  this.save = (customer) => {
    return customer.id
      ? $http.put('/api/customers/' + customer.id, customer)
      : $http.post('/api/customers', customer);
  };

  this.remove = (customerId) => {
    return $http.delete('/api/customers/' + customerId);
  };

};

export default CustomerFactory;
