import template from "./login.html";
import "./login.scss";


/*@ngInject*/
class controller {

  constructor(AuthService, Toast, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
    this.Toast = Toast;
    this.credentials = {
      email: 'admin@gmail.com',
      password: 'admin',
      rememberMe: true
    }
  }

  doLogin() {
    this.AuthService.authenticate(this.credentials)
      .then(
        () => this.$state.transitionTo('home'),
        () => this.Toast.warning('Usuário e/ou senha não encontrados')
      );
  }

}

export default {
  template,
  controller
};
