const POSITION = 'top right';
const THEME_SUCCESS = "success-toast";
const THEME_DANGER = "danger-toast";
const THEME_WARNING = "warn-toast";

/*@ngInject*/
class Toast {

  constructor($mdToast) {
    this.$mdToast = $mdToast;
  }

  showMessage(message, theme) {
    return this.$mdToast.show(
      this.$mdToast
        .simple()
        .textContent(message)
        .position(POSITION)
        .theme(theme)
    );
  }

  success(message) {
    return this.showMessage(message, THEME_SUCCESS);
  }

  warning(message) {
    return this.showMessage(message, THEME_WARNING);
  }

  danger(message) {
    return this.showMessage(message, THEME_DANGER);
  }

}

export default Toast;
