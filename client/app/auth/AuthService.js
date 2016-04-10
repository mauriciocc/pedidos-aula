/*@ngInject*/
class AuthService {

  constructor($http) {
    this.$http = $http;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  authenticate(credentials) {
    return this.$http.get('/api/sign-in', {
      headers: {'Authorization': 'Basic ' + this.generateBasic(credentials)}
    }).then((response) => {
      this.authenticated = true;
      this.user = response.data;
      this.basicAuth = this.generateBasic(credentials);
    });
  }

  generateBasic(credentials) {
    return btoa(credentials.email + ":" + credentials.password);
  }

  getBasicAuth() {
    return this.basicAuth;
  }

  getUser() {
    return this.user;
  }

  invalidate() {
    this.authenticated = false;
    this.user = null;
    this.basicAuth = null;
  }

}

export default AuthService;

