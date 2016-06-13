import template from "./chat-room.html";
import "./chat-room.scss";
import * as _ from "lodash";


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
    return this.ChatService.chatMessages();
  }

  getOnlineUsers() {
    return this.ChatService.getOnlineUsers();
  }

  openChat(chat) {
    this.ChatService.openChat(_.isObject(chat) ? chat.id : chat);
  }
  
  isCurrentChat(chat) {
    return this.ChatService.currentChat.id === (_.isObject(chat) ? chat.id : chat);
  }

  getNewMessages(chat) {
    return this.ChatService.getOrCreateChat((_.isObject(chat) ? chat.id : chat)).newMessages;
  }

}

export default {
  template,
  controller
};
