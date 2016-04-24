/*@ngInject*/
let AddressFactory = function ($http) {

  this.findAll = () => {
    return $http.get('/api/addresss').then(response => response.data);
  };

  this.findOne = (id) => {
    return $http.get('/api/addresss/' + id).then(response => response.data);
  };

  this.save = (address) => {
    return address.id
      ? $http.put('/api/addresss/' + address.id, address)
      : $http.post('/api/addresss', address);
  };

  this.remove = (addressId) => {
    return $http.delete('/api/addresss/' + addressId);
  };

};

export default AddressFactory;
