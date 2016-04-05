import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(UserService, $mdToast, $state) {
    this.UserService = UserService;
    this.$mdToast = $mdToast;
    this.$state = $state;
    console.log($state);
    this.refresh();
  }

  refresh() {
    this.UserService.findAll().then((users) => this.users = users);
  }

  remove(id) {
    this.UserService.remove(id).then(() => this.refresh());
  }

  nadegas() {
    console.log('nadegas', this.$state);
    this.$state.go('usersForm');
  }

  newUser() {
    console.log('nadegas', this.$state);
    this.$state.go('usersForm');
  }

  edit(id) {
    console.log('uvhjeowiuhvweoiuwe');
  }

}


export default {
  template,
  controller
};
