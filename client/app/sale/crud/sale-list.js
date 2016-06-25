import template from "./sale-list.html";
import BaseList from '../../BaseList';


/*@ngInject*/
class controller extends BaseList {

  constructor($state, $mdDialog, $scope, Toast, SaleService) {
    super(SaleService, Toast, $state, {newEntity: 'sale-form'});
    $scope.showPrompt = function(ev, entity) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Atenção')
          .textContent('Fechar a conta do pedido?')
          .targetEvent(ev)
          .ok('Pago')
          .cancel('Cancelar');
    $mdDialog.show(confirm).then(function() {
      entity.paid = 'Y';
      SaleService.save(entity);
      window.location.reload();
    }, function() {
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
