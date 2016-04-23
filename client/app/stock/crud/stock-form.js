import template from "./stock-form.html";
import "./stock-form.scss";


/*@ngInject*/
class controller {

  constructor($state, Toast) {
    this.Toast = Toast;
    this.$state = $state;
  }

}


export default {
  template,
  controller
};
