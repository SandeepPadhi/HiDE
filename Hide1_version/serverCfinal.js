//import { throws } from 'assert';

// import express JS module into app
// and creates its variable.
//var express = require('express');
//var app = express();
//var http=require("http").Server(app);
var len = require('object-length');
var session	= require('express-session');
var mysql = require('mysql');

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path=require('path')
var filesys=require('fs');

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
      console.log('message: ' + msg);
    
  });
  
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  

    socket.on('msg',function(data){
        //console.log("msg from sandeep yaar..!!!"+data);

       console.log("MESSAGE:"+data);

        io.emit('typing',data);
    
    
    });


  });



 




var bodyParser = require('body-parser')
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 




var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
   database: "HIDE"
  });



console.log("YAHAN BE PAHUC GAYEE..!!!");
/*


con.query("Select * from UserCredentials", function (err, result) {
    if (err) throw err;
    console.log("UnicornCustomer table deleted");

    if(len(result)){

        console.log("Users found man..!!");
    }
    else{

        console.log("Users not found");
        console.log(len(result));
    }




  });

*/

app.post('/createfile',function(req,res){
console.log("Entered Createfile");
sess=req.session;
filename=req.body.filename;
filefinal=filename;
filename="./Files/"+filename;
collaborators=req.body.collaborator;

console.log("Entering into Database");
console.log(filename);
console.log(collaborators);

filesys.writeFile(filename,"print('firstfile.py')",function(err){
    console.log("done..!!!");
    

    if (err){

        console.log("ERROR..!!!");

    };


    qry="insert into Files (email,filename) values('"+sess.email+"','"+filefinal+"');";
    con.query(qry,function(err,result){
        if(err){

        console.log(err);
        }
    console.log("HOGAYA INSERT..!!");
    //res.send();
    

});

qry="insert into Files (email,filename) values('"+collaborators+"','"+filefinal+"');";
con.query(qry,function(err,result){
    if(err){

    console.log(err);
    }
console.log("HOGAYA INSERT..!! Collaborator..!!!");
});

res.send();



});


});

  
  app.post('/pp',function(req,res){
    console.log("trying to compile..!!");
        res.send("trying to compile..!!!");
    });

  
app.get("/load",function(req,res){

sess=req.session;
console.log("Entered load")
if (sess.email)
{
    console.log("load.html");

    res.sendFile(__dirname+"/load.html");
}
else{
console.log("login.html");
    //res.sendFile(__dirname,"/login.html");
    res.redirect("http://192.168.43.63:3008/jj")
}

});    

    
app.get('/signup',function(req,res){
    res.sendFile(__dirname + '/signup.html');

});


app.post('/register',function(req,res){
    console.log("Entered Register..!!!");
    email=req.body.emailId
    password=req.body.password;
    name=req.body.name;

    console.log(email);
    console.log(password);
    console.log(name);


    qry="insert into UserCredentials (emailId,pass,name) values('"+email+"','"+password+"','"+name+"')";
    con.query(qry,function(err,result){
 if (err){


    res.send("Email id already registered..!!!");
 };

 console.log("Entered Successfully");

 res.sendFile(__dirname + '/finaldemofinal.html');


    });



});


  app.get('/trylogin',function(req,res){
   console.log("entered trylogin..!!");
    sess=req.session;
    if(sess.email){
    console.log("session activef..!!");
    res.redirect("https://192.168.43.63:3008/login");
    
    }
    else{
        console.log("NO SESSION..!!!");
        res.sendFile(__dirname + '/login.html');
    }
    
    console.log("hello..!!");
    
    
    });
    
    
    



app.get("/getfilelinks",function(req,res){


    query="select filename from Files where email='"+sess.email+"'";
        
    con.query(query,function(err,result){
        if (err) throw err;
        //console.log(result);
        //console.log( JSON.stringify(result[""]));
// return "good";
        data=JSON.stringify(result);
        console.log("\n\n\nDATA BALUE IS  "+data);
        res.send(data);




    });




});


//create table Files (email varchar(20),filename varchar(20));

app.post("/savefiles",function(req,res){

filename=req.body.filename;
filename="./Files/"+filename;

console.log("filename is "+filename);
data=req.body.data;
console.log("Data is "+data);
filesys.writeFile(filename,data,function(){
//if (err) throw err 
res.send("File saved Man..!!!");


})

});


app.get('/getfiles',function(req,res){

    filename=req.query.name;
    filename="./Files/"+filename;
    console.log("requested filename is "+filename);
    filesys.readFile(filename, 'utf8', function(err, data) {  
        if (err) throw err;
        console.log(data);
        res.send(data);
    });




});




    app.post('/login',function(req,res){




        sess=req.session;
        email=req.body.emailId
        password=req.body.password;
        console.log("Entered Login");
        console.log(email);
        console.log(password);
        query="select * from UserCredentials where emailId='"+email+"' and pass='"+password+"'";
        console.log("Entered login..!!");
        
        con.query(query,function(err,result){
        
        if (len(result)){
            sess.email=email
            sess.pass=password;
          console.log("valid session..!!!");
            //res.send(sess);
            //res.sendFile(__dirname + '/finaldemofinal.html');
            res.redirect("http://192.168.43.63:3008/load");

        
            //res.send("Login Sucessful man..!!!");
        }
        else{
        
        
            res.send("Invalid Login Credentials");
        }
        
        });
        
        
        
    });





app.get('/jj', function(req, res){
    
    sess=req.session;

    console.log("Entered jj...");
    console.log(len(sess.email));
    //console.log("Length of sess:"+len(sess.email).toString());

    if(!sess.email){
        //res.send("Invalid Entry..!!!");
        res.redirect("http://192.168.43.63:3008/trylogin");
    }
    else{
       

        res.sendFile(__dirname + '/finaldemofinal.html');
        console.log("/ accessed jj");
    }

});







app.post('/compile', function(req, res){
    console.log("compile");

    console.log('Form (from querystring): ' + req.body.codingarea);
    console.log("jlfdjalsdjf");
    
    

    var fs = require('fs');
    fs.writeFileSync("./hello.cpp", req.body.codingarea, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    }); 



    var spawn = require("child_process").spawn;
    var process = spawn('g++',["./hello.cPP"] );

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






app.get('/python',(req,res)=>{
console.log("working on python.js");

 
res.sendFile(__dirname+'/mode/python/python.js');


}
);



app.get('/javascript',(req,res)=>{
    console.log("working on javascript.js");

    res.sendFile(__dirname+'/mode/javascript/javascript.js');
    
    
});


app.get('/codemirror',(req,res)=>{
    console.log("working on codemirror.js");

    res.sendFile(__dirname+'/lib/codemirror.js');
    
});



app.get('/clike',(req,res)=>{
    console.log("working on clike.js");

    res.sendFile(__dirname+'/mode/clike/clike.js');
    
});


app.get('/closebrackets',(req,res)=>{
    console.log("working on closebrackets.js");

res.sendFile(__dirname+'/addon/edit/closebrackets.js');


});



app.get('/codemirrorcss',(req,res)=>{
    console.log("working on codemirrorcss");

    res.sendFile(__dirname+'/lib/codemirror.css');
    
    
    });


app.get('/lesserdarkcss',(req,res)=>{

    console.log("working on lessdarkercss");

        res.sendFile(__dirname+'/theme/lesser-dark.css');
        
        
});


app.get('/ideacss',(req,res)=>{
    console.log("working on ideacss");

    res.sendFile(__dirname+'/theme/idea.css');
    
    
});








app.post('/chattime', function(req, res){

console.log("Entered chattime..!!!");

    var compilertype=req.query.type;


    console.log("Requested "+compilertype+"  Compiler..!!!");

    console.log('Form (from querystring): ' + req.body.chatarea);
    var fs = require('fs');



    switch(compilertype){

        case "Cpp":{
            console.log("Cpp Compiler...!!!");

            fs.writeFileSync("./hello.cpp", req.body.chatarea, function(err) {
                if(err) {
                    console.log("Error hai re baba..!!!");
                    return console.log(err);
                }
                console.log("The file was saved!");
                }); 
            
                console.log('compiling hello.cpp...!!!')
            
                var spawn = require("child_process").spawn;
                var process = spawn('g++',['./hello.cpp'] );
            
            // Takes stdout data from script which executed
            // with arguments and send this data to res object
                process.stdout.on('data', function(data) {
                    //res.send(data.toString());
                    console.log("entered process data..!!!")
                    console.log(data.toString());
            
            
                    });
                
                
            
                process.on('exit',function(data){
                    console.log("Exiting process ..!!!");
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
                  console.log("Exiting bhai..!!!");
                  console.log(str);
                  res.send(str)
            
                    });
            
                  process2.stderr.on('err',function(err){
            
                console.log("Error hai re bhai..");
                console.log(err);
            
                  });
            
                });








        }
        break;


        case "Python":

        {
            console.log("Python compiler..!!!!!");
            fs.writeFileSync("./hello.py", req.body.chatarea, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
                }); 
            
            
                console.log("After saving..");
                var spawn = require("child_process").spawn;
                var process = spawn('python',['hello.py'] );
            
            // Takes stdout data from script which executed
            // with arguments and send this data to res object
                process.stdout.on('data', function(data) {

                    console.log(data);
                    res.send(data.toString());
            
            
                    });
                 
                process.stderr.on('data',function(data){
                    console.log("Error in python code..!!");
                    res.send(data);
                });
        }
    
        break;



        case "Java":{

            console.log("Java Compiler..!!!!");

            fs.writeFileSync("./hello.java", req.body.chatarea, function(err) {
                if(err) {
                    console.log("Error hai re baba..!!!");
                    return console.log(err);
                }
                console.log("The file was saved!");
                }); 
            
                console.log('compiling hello.java...!!!')
            
                var spawn = require("child_process").spawn;
                var process = spawn('javac',["./hello.java"] );
            
            // Takes stdout data from script which executed
            // with arguments and send this data to res object
                process.stdout.on('data', function(data) {
                    //res.send(data.toString());
                    console.log("entered process data..!!!")
                    console.log(data.toString());
            
            
                    });
                //RECENTLY ADDED...
                
                    process.stderr.on('data',function(data){
                        console.log("Error in java code..!!");
                        res.send(data);
                    });
//////////////////////////////////////////////

                process.on('exit',function(data){
                    console.log("Exiting process ..!!!");
                    console.log("value  nahi aaya bee..!!!");
            
                
            
                    var process2 = spawn('java',['hello'] );
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
                    res.send(err);
            
                  });
            
                });









        }
       break;


        case "C":{



            fs.writeFileSync("./hello.c", req.body.chatarea, function(err) {

                console.log("C compiler..!!!")

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
                    process.stderr.on('data',function(data){
                        console.log("Error in C code..!!");
                        res.send(data);
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
                    process.stderr.on('data',function(data){
                        console.log("Error in Runtime code..!!");
                        res.send(data);
                    });
            
                    process2.on('exit',function(data){
            
                  res.send(str)
            
                    });
            
                  process2.stderr.on('err',function(err){
            
                console.log("Error hai re bhai..");
                console.log(err);
            
                  });
            
                });
                











        }



}







   

    
    });












app.get('/san', function(req, res){
    res.sendFile(__dirname + '/index.html');
    console.log("/ accessed san");

  });


app.get('/',function(req,res){
console.log("Load ..!!!");

res.sendFile(__dirname + '/load.html');

});



var hostname='192.168.43.63';
const port = process.env.PORT || 3000

http.listen(3008,'192.168.43.63', function(){
    console.log('listening on *:3008');
  });
 

// Creates a server which runs on port 3000 and 
// can be accessed through localhost:3000

 
  


