// import express JS module into app
// and creates its variable.
//var express = require('express');
//var app = express();
//var http=require("http").Server(app);

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
      console.log('message: ' + msg);
    
  });
  
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  
  });



var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.get('/jj', function(req, res){
    res.sendFile(__dirname + '/finalapppython.html');

     

    console.log("/ accessed jj");

});







app.post('/compile', function(req, res){
    console.log("compile");

    console.log('Form (from querystring): ' + req.body.codingarea);
    console.log("jlfdjalsdjf");
    
    

    var fs = require('fs');
    fs.writeFileSync("./hello.py", req.body.codingarea, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    }); 



    var spawn = require("child_process").spawn;
    var process = spawn('python',["./hello.py"] );

// Takes stdout data from script which executed
// with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        res.send(data.toString());


        });

    });










app.post('/chattime', function(req, res){
    console.log('Form (from querystring): ' + req.body.chatarea);
    console.log("jlfdjalsdjf");

    var fs = require('fs');
fs.writeFileSync("./hello.py", req.body.chatarea, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    }); 



    var spawn = require("child_process").spawn;
    var process = spawn('python',["./hello.py"] );

// Takes stdout data from script which executed
// with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        res.send(data.toString());


        });

    });












app.get('/san', function(req, res){
    res.sendFile(__dirname + '/index.html');
    console.log("/ accessed san");

  });



http.listen(5505, function(){
    console.log('listening on *:3000');
  });
 
// Creates a server which runs on port 3000 and 
// can be accessed through localhost:3000

 
  


