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
      if (this.authRequest) {
        this.authRequest.then(() => resolve(this.authenticated));
      } else {
        resolve(this.authenticated);
      }
    });
  }

  authenticate(credentials) {
    var request = this.$http.post('/api/sign-in', credentials)
    request
      .then((response) => {
        this.authenticated = response.data.success;
        if (this.authenticated) {
          this.user = response.data.user;
          if (credentials.rememberMe) {
            this.$cookies.putObject(CREDENTIALS, credentials);
          }
          this.$http.defaults.headers.common.Authorization = response.data.token;
        }
        return response.data;
      }, (err) => this.authenticated = false);
    return request;
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

