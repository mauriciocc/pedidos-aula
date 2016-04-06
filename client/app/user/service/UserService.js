/*@ngInject*/
let UserFactory = function ($http) {

  this.findAll = () => {
    return $http.get('/api/users').then(response => response.data);
  };

  this.findOne = (id) => {
    return $http.get('/api/users/' + id).then(response => response.data);
  };

  this.save = (user) => {
    return user.id
      ? $http.put('/api/users/' + user.id, user)
      : $http.post('/api/users', user);
  };

  this.remove = (userId) => {
    return $http.delete('/api/users/' + userId);
  };

};

export default UserFactory;
