/*@ngInject*/
let AuditingFactory = function ($http) {

  this.findAll = () => {
    return $http.get('/api/auditings').then(response => response.data);
  };

  this.findOne = (id) => {
    return $http.get('/api/auditings/' + id).then(response => response.data);
  };

};

export default AuditingFactory;
