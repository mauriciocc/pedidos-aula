import template from './app.html';
import controller from './app.controller';
import './app.scss';

let appComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: '$ctrl'
};

export default appComponent;
