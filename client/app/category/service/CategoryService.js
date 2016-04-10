/*@ngInject*/
let CategoryFactory = function ($http) {

  this.findAll = () => {
    return $http.get('/api/categorys').then(response => response.data);
  };

  this.findOne = (id) => {
    return $http.get('/api/categorys/' + id).then(response => response.data);
  };

  this.save = (category) => {
    return category.id
      ? $http.put('/api/categorys/' + category.id, category)
      : $http.post('/api/categorys', category);
  };

  this.remove = (categoryId) => {
    return $http.delete('/api/categorys/' + categoryId);
  };

};

export default CategoryFactory;
