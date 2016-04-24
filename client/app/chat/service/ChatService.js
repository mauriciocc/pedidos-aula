const WS_NAMESPACE = "/chat";
import io from "socket.io-client";

/*@ngInject*/
class ChatService {

  constructor(AuthService) {
    this.AuthService = AuthService;
  }

  signIn(callback) {
    this.callback = callback;
    if (!this.ioSocket) {
      this.ioSocket = io();
      this.messages = [];
      this.ioSocket.on('SERVER_PUSH_CHAT_MESSAGE', (msg) => {
        this.messages.push(msg);
        this.callback();
      });
    }
  }

  sendMessage(message) {
    var messageToSend = {
      user: this.AuthService.getUser(),
      date: new Date(),
      message
    };
    this.ioSocket.emit('CLIENT_SEND_CHAT_MESSAGE', messageToSend);
  }

}


export default ChatService;
