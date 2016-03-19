import template from './userForm.html';
import controller from './userForm.controller';
import './userForm.styl';

let userFormComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default userFormComponent;
