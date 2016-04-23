import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(UserService, $state, Toast) {
    this.UserService = UserService;
    this.Toast = Toast;
    this.$state = $state;
    this.refresh();
  }

  refresh() {
    this.UserService.findAll().then((users) => this.users = users);
  }

  remove(id) {
    this.UserService.remove(id).then(() => this.refresh());
  }

  newUser() {
    this.$state.go('users-form-new');
  }

  edit(id) {
    this.$state.go('users-form-edit', {id: id});
  }

}


export default {
  template,
  controller
};
