var app=require('express')();
var http = require('http').Server(app);
var session	= require('express-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var len = require('object-length');
var path=require('path')

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
   database: "HIDE"
  });
  
console.log("YAHAN BE PAHUC GAYEE..!!!");





    

//UserCredentials table will contain all email id and password

//creating query of UserCredentials table creation

/*

Create table UserCredentials (
  emailId varchar(30),
  pass varchar(30),
  name varchar(30),
  PRIMARY KEY (emailId)
);


Insert into UserCredentials (emailId,pass,name) values("padhisandeep96@gmail.com","1234","Sandeep");
Insert into UserCredentials (emailId,pass,name) values("bharavi15@gmail.com","5678","bharavi");
Insert into UserCredentials (emailId,pass,name) values("saurabhagatdie@gmail.com","9876","Saurabh");


*/


app.get("/",function(req,res){



sess=req.session;
console.log("Entered compiler..!!!");
console.log(sess);
if (sess.email){
res.send("You are logged in man...!!!");
}
else{

    
res.redirect("http://192.168.0.108:3003/")

}


});




http.listen(3006,'192.168.0.108',function(){

console.log('compiler Server Listening on port 3003 on ip 192.168.0.108');


});