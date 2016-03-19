/*@ngInject*/
let UserFactory = function ($http) {

  let findAll = () => {
    return $http.get('/api/users');
  };

  let save = (user) => {
    return $http.post('/api/users', user);
  };

  let remove = (userId) => {
    return $http.delete('/api/users/' + userId);
  };

  return {findAll, save, remove};
};

export default UserFactory;
