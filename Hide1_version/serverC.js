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
    res.sendFile(__dirname + '/finaldemoC.html');

     

    console.log("/ accessed jj");

});







app.post('/compile', function(req, res){
    console.log("compile");

    console.log('Form (from querystring): ' + req.body.codingarea);
    console.log("jlfdjalsdjf");
    
    

    var fs = require('fs');
    fs.writeFileSync("./hello.c", req.body.codingarea, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    }); 



    var spawn = require("child_process").spawn;
    var process = spawn('gcc',["./hello.c"] );

// Takes stdout data from script which executed
// with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        console.log("process ended ...with data:"+data);
    });

    process.on('exit',function(data){

        var process2 = spawn('./a.out' );
        process.stdout.on('data', function(data) {
        res.send(data.toString());
    
    
    });





    });




});










app.post('/chattime', function(req, res){
    console.log('Form (from querystring): ' + req.body.chatarea);
    console.log("jlfdjalsdjf");

    var fs = require('fs');
fs.writeFileSync("./hello.c", req.body.chatarea, function(err) {
    if(err) {
        console.log("Error hai re baba..!!!");
        return console.log(err);
    }
    console.log("The file was saved!");
    }); 

    console.log('compiling hello.java...!!!')

    var spawn = require("child_process").spawn;
    var process = spawn('gcc',["./hello.c"] );

// Takes stdout data from script which executed
// with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        //res.send(data.toString());
        console.log("entered process data..!!!")
        console.log(data.toString());


        });
    
    

    process.on('exit',function(data){
        console.log("Exiting process ..!!!");
        console.log("value  nahi aaya bee..!!!");

    

        var process2 = spawn('./a.out' );
        var str=""
        process2.stdout.on('data',function(data){
            str=str+data;
        console.log(data)
        console.log("value aaya bee..!!!");
        //
        //res.send(data.toString());
  

        });


        process2.on('exit',function(data){

      res.send(str)

        });

      process2.stderr.on('err',function(err){

    console.log("Error hai re bhai..");
    console.log(err);

      });

    });
    
    });












app.get('/san', function(req, res){
    res.sendFile(__dirname + '/index.html');
    console.log("/ accessed san");

  });


http.listen(5505,'192.168.0.107', function(){
    console.log('listening on *:5505');
  });
 

// Creates a server which runs on port 3000 and 
// can be accessed through localhost:3000

 
  


