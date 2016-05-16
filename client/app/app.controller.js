/*@ngInject*/
class AppController {

  constructor(AuthService, $state) {
    this.name = 'app';
    this.AuthService = AuthService;
    this.$state = $state;
  }

  currentUser() {
    return this.AuthService.getUser();
  }
}

export default AppController;
