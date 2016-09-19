var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var notificationListener = require('./app/controllers/unseenNotification');
//var postController = require('./app/controllers/posts');
//var sharepostController = require('./app/controllers/share_post');

//module.exports.sio = io;

//console.log('socket.io is : ',io);

var numUsers = 0;

io.on('connection', function (socket) {
  var addedUser = false;

 // likepostController.likepost(socket);
//  sharepostController.sharepost(socket);
  //postController.post(socket);
  
  notificationListener.notification(socket);

  // when the client emits 'new message', this listens and executes
  /*socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });
*/
  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    if (addedUser) return;
    console.log(username);
    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});


require('./config/express')(app, config);

http.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
/*
app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});*/