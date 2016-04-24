var socketIo = require('socket.io');

module.exports = function (http) {
  var io = socketIo(http);
  return io
    .on('connection', function (socket) {
      //console.log('a user connected');
      socket.on('disconnect', function () {
        //console.log('a user disconnected');
      });

      socket.on('CLIENT_SEND_CHAT_MESSAGE', function(msg){
        io.emit("SERVER_PUSH_CHAT_MESSAGE", msg);
        //console.log(msg);
      });
    });

};
