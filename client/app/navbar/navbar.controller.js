/*@ngInject*/
class NavbarController {

  constructor(AuthService, $state) {
    this.name = 'navbar';
    this.AuthService = AuthService;
    this.$state = $state;
  }

  currentUser() {
    return this.AuthService.getUser();
  }

  logout() {
    this.AuthService.invalidate();
    this.$state.transitionTo('login');
  }
}

export default NavbarController;
