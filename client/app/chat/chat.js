import angular from "angular";
import ChatService from "./service/ChatService";
import chatRoom from "./public/chat-room"

let categoryModule = angular.module('app.chat', [])
  .config(function ($stateProvider) {
    "ngInject";
    $stateProvider
      .state('public-chat', {
        url: '/chat/public',
        template: '<chat-room></chat-room>'
      })
  })
  .service('ChatService', ChatService)
  .component('chatRoom', chatRoom);


export default categoryModule;
