const WS_NAMESPACE = "/chat";
import io from "socket.io-client";
import * as _ from "lodash";


class Chat {
  constructor(id) {
    this.id = id;
    this.messages = [];
    this.newMessages = 0;
  }
}

/*@ngInject*/
class ChatService {

  constructor(AuthService) {
    this.AuthService = AuthService;
    this.chats = [new Chat('public')];
    this.currentChat = this.chats[0];
  }

  signIn(callback) {
    this.callback = callback;
    if (!this.ioSocket) {
      this.ioSocket = io();
      this.onlineUsers = [];
      this.ioSocket.on('SERVER_PUSH_CHAT_MESSAGE', (msg) => {
        var chat;

        if (msg.to === 'public') {
          chat = this.chats[0]
        } else if (msg.to.toString() === this.user().id.toString()) {
          chat = this.getOrCreateChat(msg.user.id);
        } else if (msg.user.id === this.user().id) {
          chat = this.getOrCreateChat(msg.to);
        }

        chat.messages.push(msg);
        if(chat.id !== this.currentChat.id) {
          chat.newMessages++;
        }
        this.callback();
      });
      this.ioSocket.on('ONLINE_USERS_CHANGED', (users) => {
        this.onlineUsers = users;
        this.callback();
      });
      this.ioSocket.emit('CLIENT_SIGN_IN', this.AuthService.getUser());
    }
  }

  sendMessage(message) {
    var messageToSend = {
      user: this.user(),
      date: new Date(),
      to: this.currentChat.id,
      message
    };
    this.ioSocket.emit('CLIENT_SEND_CHAT_MESSAGE', messageToSend);
  }

  getOnlineUsers() {
    var id = this.user().id;
    return this.onlineUsers.filter(u => u.id !== id);
  }
  chatMessages() {
    return this.currentChat.messages;
  }

  openChat(chat) {
    this.currentChat = this.getOrCreateChat(chat);
    this.currentChat.newMessages = 0;
  }

  getOrCreateChat(chatId) {
    var chat = _.find(this.chats, {id: chatId});
    if (!chat) {
      chat = new Chat(chatId);
      this.chats.push(chat);
    }
    return chat;
  }

  user() {
    return this.AuthService.getUser()
  }

}


export default ChatService;
