const CREDENTIALS = "CREDENTIALS";

/*@ngInject*/
class AuthService {


  constructor($http, $cookies) {
    this.$http = $http;
    this.$cookies = $cookies;
    var credentials = $cookies.getObject(CREDENTIALS);
    if (credentials) {
      this.authRequest = this.authenticate(credentials);
    }
  }

  isAuthenticated() {
    return new Promise((resolve) => {
      if(this.authRequest) {
        this.authRequest.then(() => resolve(this.authenticated));
      } else {
        resolve(this.authenticated);
      }
    });
  }

  authenticate(credentials) {
    this.basicAuth = this.generateBasic(credentials);
    return this.$http.get('/api/sign-in', {
      headers: {'Authorization': 'Basic ' + this.basicAuth}
    }).then((response) => {
      this.authenticated = true;
      this.user = response.data;
      if (credentials.rememberMe) {
        this.$cookies.putObject(CREDENTIALS, credentials);
      }
      this.$http.defaults.headers.common.Authorization = 'Basic ' + this.basicAuth;
    }, (err) => this.authenticated = false);
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
    this.$cookies.remove(CREDENTIALS);
    this.authenticated = false;
    this.user = null;
    this.basicAuth = null;
  }

}

export default AuthService;

