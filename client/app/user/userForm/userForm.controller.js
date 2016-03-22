/*@ngInject*/
class UserFormController {

  constructor(UserService) {
    this.UserService = UserService;
    this.refresh();
  }

  refresh() {
    this.UserService.findAll().then((users) => this.users = users);
  }

  save() {
    this.UserService.save(this.user).then(() => this.refresh());
  }

  remove(id) {
    this.UserService.remove(id).then(() => this.refresh());
  }

}

export default UserFormController;
