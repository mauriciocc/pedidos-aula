/*@ngInject*/
class UserFormController {

  constructor(UserService, Toast, $mdDialog, $stateParams) {
    this.UserService = UserService;
    this.Toast = Toast;
    this.$mdDialog = $mdDialog;
    this.$stateParams = $stateParams;
    if ($stateParams.id) {
      UserService.findOne($stateParams.id).then((user) => this.user = user);
    } else {
      this.user = {};
    }
  }

  refresh() {
    this.UserService.findAll().then((users) => this.users = users);
  }

  save() {
    this.UserService.save(this.user).then(() => {
      this.Toast.success('Usuário salvo com sucesso!');
      this.refresh();
    }, () => {
      this.Toast.danger('Ocorreu um erro ao tentar salvar o usuário!' + arguments);
    });
  }

  remove(id) {
    this.UserService.remove(id).then(() => this.refresh());
  }

  edit(id) {
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ok('Salvar')
    );
  }

}

export default UserFormController;
