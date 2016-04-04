/*@ngInject*/
class UserFormController {

  constructor(UserService, $mdToast) {
    this.UserService = UserService;
    this.$mdToast = $mdToast;
    this.refresh();
  }

  refresh() {
    this.UserService.findAll().then((users) => this.users = users);
  }

  save() {
    this.UserService.save(this.user).then(() => {
      this.$mdToast.show(
        this.$mdToast
        .simple().textContent('Usuário salvo com sucesso!')
        .position('top right')
        .theme("success-toast")
      );
      this.refresh();
    }, () => {
      this.$mdToast.show(
        this.$mdToast
          .simple().textContent('Ocorreu um erro ao tentar salvar o usuário!' + arguments)
          .position('top right')
          .theme("danger-toast")
      );
      console.log(arguments);
    });
  }

  remove(id) {
    this.UserService.remove(id).then(() => this.refresh());
  }

}

export default UserFormController;
