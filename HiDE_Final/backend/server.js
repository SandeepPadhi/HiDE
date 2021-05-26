var seServer = '192.168.0.4';

module.exports.serverFunctions = {
  notifyInvite: function(username, from, message, inviteLink, status, projectid) {
    io.to(users[username]).emit('notifyinvite', JSON.stringify(
      {
        from: from,
        message: message,
        inviteLink: inviteLink,
        status: status,
        projectid: projectid
      }));
  },
  createProjectAccount: function(projectid, projectpass) {
    return new Promise(function(resolve, reject){
      status = false;
      resData = null;
      var data = querystring.stringify({
        username: projectid,
        password: projectpass
      });

      var options = {
        host: seServer,
        port: 4000,
        path: '/api/newaccount',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(data)
        }
      };

      var httpreq = http.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
          resData = JSON.parse(chunk);
          status = resData.status;
          console.log(resData);
        });
        response.on('end', function() {
          if(resData.status == true){
            resolve(true);
          } else {
            resolve(false);
          }
        })
      });
      httpreq.write(data);
      httpreq.end();
    });
  }
};

const http = require('http');
var https = require('https');
const debug = require('debug')('node-angular');
var io = require('socket.io');
var querystring = require('querystring');
const firebase = require('./app').firebase;
var fs = require('fs');

const normalizePort = val => {
  var port = parseInt(val, 10);
  if(isNaN(port)){
    return val;
  }
  if(port >= 0){
    return port;
  }
  return false;
}

const onError = error =>{
  if(error.syscall !== "listen"){
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch(error.code){
    case "EACCES":{
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    }
    case "EADDRINUSE":{
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    }
    default:{
      throw error;
    }
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
}

const port = normalizePort(process.env.PORT || "4000");
const app = require('./app').app;
app.set("port", port);

const server = http.createServer(app);
io = io(server);

users = {};
var openProjects = {};
var openPeers = {};
var socidtoprojid = {};

io.on('connection', (socket) => {
  socket.on('announceuser', (data) => {
    data = JSON.parse(data);
    firebase.auth().verifyIdToken(data.token)
      .then( (decodedToken) => {
        for(var i = 0 ; i < Object.keys(users).length ; i++) {
          if (users[data.username]) {
            console.log('user exists, changing socketid');
            var oldsocketid = users[data.username];
            users[data.username] = socket.id;
            // delete old openProjects Entry
            if (socidtoprojid[oldsocketid] && openProjects[socidtoprojid[oldsocketid]]) {
              delete openProjects[socidtoprojid[oldsocketid]][oldsocketid];
            }
            // delete old openPeers Entry
            if (socidtoprojid[oldsocketid] && openPeers[socidtoprojid[oldsocketid]]) {
              delete openPeers[socidtoprojid[oldsocketid]][oldsocketid];

              for(var socketid of Object.keys(openPeers[socidtoprojid[oldsocketid]])) {
                io.to(socketid).emit('changepeers', openPeers[socidtoprojid[oldsocketid]]);
              }
            }
            console.log(openProjects);
            console.log(openPeers);
            console.log(users);
            return;
          }
        }
        users[data.username] = socket.id;
        console.log(users);
      })
      .catch( (error) => {
        console.log(error);
        console.log('token not valid');
      });
  });

  socket.on('projectopen', (data) => {
    if (openProjects[data.projectid] != null) {
      openProjects[data.projectid][socket.id] = '1';
    } else {
      openProjects[data.projectid] = {};
      openProjects[data.projectid][socket.id] = '1';
    }
    socidtoprojid[socket.id] = data.projectid;
    console.log(openProjects);
  });

  socket.on('projectclose', (data) => {
    if(openProjects[data.projectid]) {
      if(openProjects[data.projectid][socket.id]) {
        delete openProjects[data.projectid][socket.id];
      }
    }
    if(openProjects[data.projectid]) {
      if (Object.keys(openProjects[data.projectid]).length === 0){
        delete openProjects[data.projectid];
      }
    }
    if (socidtoprojid[socket.id]){
      delete socidtoprojid[socket.id];
    }
    console.log(openProjects);
  });

  socket.on('sendmessage', (data) => {
    if(openProjects[data.projectid]){
      for(var id of Object.keys(openProjects[data.projectid])) {
        if(id != socket.id){
          io.to(id).emit('receivemessage', {
            message: data.message,
            from: data.username
          });
        }
      }
    }
  });

  socket.on('openpeer', (data) => {
    if (openPeers[data.projectid] != null) {
      openPeers[data.projectid][socket.id] = data.peerid;
    } else {
      openPeers[data.projectid] = {};
      openPeers[data.projectid][socket.id] = data.peerid;
    }
    console.log(openPeers);
    if(openPeers[data.projectid]) {
      for(var socketid of Object.keys(openPeers[data.projectid])) {
        io.to(socketid).emit('changepeers', openPeers[data.projectid]);
      }
    }
  });

  socket.on('closepeer', (data) => {
    if(openPeers[data.projectid]) {
      if(openPeers[data.projectid][socket.id]) {
        delete openPeers[data.projectid][socket.id];
      }
    }
    if(openPeers[data.projectid]) {
      if (Object.keys(openPeers[data.projectid]).length === 0){
        delete openPeers[data.projectid];
      }
    }
    console.log(openPeers);
    if(openPeers[data.projectid]) {
      for(var socketid of Object.keys(openPeers[data.projectid])) {
        io.to(socketid).emit('changepeers', openPeers[data.projectid]);
      }
    }
  });

  socket.on('removeuser', (data) => {
    if(users[data.username]) {
      delete users[data.username]
    }
    console.log('user left');
    console.log(users);
  });
});

server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
