export default class BaseList {

  constructor(Service, Toast, $state, views) {
    this.Service = Service;
    this.Toast = Toast;
    this.$state = $state;
    this.views = views;
    this.refresh();
  }

  refresh() {
    this.Service.findAll()
      .then((entities) => this.entities = entities)
      .catch(e => {
        this.Toast.danger('Erro ao buscar objetos: ' + e);
      });
  }

  remove(entity) {
    this.Service.remove(entity.id)
      .then(() => {
        this.Toast.success('Objeto removido com sucesso!');
        this.refresh();
      })
      .catch(e => {
        this.Toast.danger('Erro ao remover Objeto: ' + e);
      });
  }

  newEntity() {
    this.$state.go(this.views.newEntity);
  }

  editEntity(id) {
    this.$state.go(this.views.editEnity, {id: id});
  }

}
