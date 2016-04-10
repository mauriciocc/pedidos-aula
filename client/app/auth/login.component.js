import template from "./login.html";
import "./login.scss";


/*@ngInject*/
class controller {

  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
    this.credentials = {
      email: 'admin@gmail.com',
      password: 'admin',
      rememberMe: true
    }
  }

  doLogin() {
    this.AuthService.authenticate(this.credentials)
      .then(() => this.$state.transitionTo('home'));
  }

}

export default {
  template,
  controller
};
