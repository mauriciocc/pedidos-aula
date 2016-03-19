/*@ngInject*/
class UserFormController {

  constructor(UserService) {
    this.UserService = UserService;
    this.name = 'userForm';
  }

  save() {
    this.UserService.save(this.user).then(() => alert("Usuário Salvo :D"));
  }

}

export default UserFormController;
