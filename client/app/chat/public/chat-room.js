import template from "./chat-room.html";
import "./chat-room.scss";


/*@ngInject*/
class controller {

  constructor($scope, ChatService) {
    this.message = '';
    this.ChatService = ChatService;
    this.ChatService.signIn(() => $scope.$apply());

  }

  sendMessage() {
    this.ChatService.sendMessage(this.message);
    this.message = '';
  }

  getMessages() {
    return this.ChatService.messages;
  }

}

export default {
  template,
  controller
};
