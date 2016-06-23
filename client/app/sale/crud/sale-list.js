import template from "./sale-list.html";
import BaseList from '../../BaseList';


/*@ngInject*/
class controller extends BaseList {

  constructor($state, $mdDialog, $scope, Toast, SaleService) {
    super(SaleService, Toast, $state, {newEntity: 'sale-form'});
    $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Você quer fechar o pedido?')
      .textContent('')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('I\'m a cat person');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };
  $scope.showConfirm = function(ev, entity) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Atenção')
          .textContent('Você quer mesmo remover esse pedido?')
          .targetEvent(ev)
          .ok('Remover')
          .cancel('Cancelar');
    $mdDialog.show(confirm).then(function() {
      SaleService.remove(entity.id);
      window.location.reload();
    }, function() {
    });
  };
  }
}

export default {
  template,
  controller
};
