import template from "./list.html";
import "./list.scss";


/*@ngInject*/
class controller {

  constructor(UserService, $state, Toast, $scope) {
    this.UserService = UserService;
    this.Toast = Toast;
    this.$state = $state;
    this.refresh();
    this.$scope = $scope;
    this.$scope.limitOptions = [10, 20, 30];
    this.$scope.selected = [];

    this.$scope.options = {
      rowSelection: false,
      multiSelect: false,
      autoSelect: true,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: true,
      limitSelect: true,
      pageSelect: true
    };

    this.$scope.query = {
      order: 'name',
      limit: 10,
      page: 1
    };
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
