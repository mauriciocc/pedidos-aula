var socketIo = require('socket.io');
var _ = require("lodash");

module.exports = function (http) {

  var connectedUsers = [];
  var io = socketIo(http);
  return io
    .on('connection', function (socket) {


      var identifier = {id: socket.conn.id};
      connectedUsers.push(identifier);
      socket.on('disconnect', function () {
        _.remove(connectedUsers, {id: identifier.id});
      });

      socket.on('CLIENT_SEND_CHAT_MESSAGE', function (msg) {
        io.emit("SERVER_PUSH_CHAT_MESSAGE", msg);
      });

      socket.on('CLIENT_SIGN_IN', function (user) {
        identifier.user = user;
        io.emit("ONLINE_USERS_CHANGED", connectedUsers.map(e => e.user));
      });
    });

};
