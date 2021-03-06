/*@ngInject*/
class UserFormController {

  constructor(UserService, Toast, $stateParams, $state) {
    this.UserService = UserService;
    this.Toast = Toast;
    this.$stateParams = $stateParams;
    this.$state = $state;
    if ($stateParams.id) {
      UserService.findOne($stateParams.id).then((user) => this.user = user);
    } else {
      this.user = {};
    }
    UserService.findRoles().then(roles => this.availableRoles = roles);
  }

  refresh() {
    this.UserService.findAll().then((users) => this.users = users);
  }

  save() {
    this.UserService.save(this.user).then(() => {
      this.Toast.success('Usuário salvo com sucesso!');
        this.$state.go('users');
      this.refresh();
    }, () => {
      this.Toast.danger('Ocorreu um erro ao tentar salvar o usuário!' + arguments);
    });
  }

}

export default UserFormController;
