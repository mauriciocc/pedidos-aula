/*@ngInject*/
let CityFactory = function ($http) {

  this.findAll = () => {
    return $http.get('/api/citys').then(response => response.data);
  };

  this.findOne = (id) => {
    return $http.get('/api/citys/' + id).then(response => response.data);
  };

  this.save = (city) => {
    return city.id
      ? $http.put('/api/citys/' + city.id, city)
      : $http.post('/api/citys', city);
  };

  this.remove = (cityId) => {
    return $http.delete('/api/citys/' + cityId);
  };

};

export default CityFactory;
