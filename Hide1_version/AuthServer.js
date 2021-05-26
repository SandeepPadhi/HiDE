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

  




//req.session
//sess.email
//sess.id
//req.body.email
//req.session.destroy


app.get('/',function(req,res){

sess=req.session;
if(sess.email){

res.redirect("https://192.168.0.108:3003/login");

}
else{
    res.sendFile(__dirname + '/login.html');
}

console.log("hello..!!");


});








app.post('/login',function(req,res){




sess=req.session;
email=req.body.emailId
password=req.body.password;
console.log("Entered Login");
console.log(email);
console.log(password);
query="select * from UserCredentials where emailId='"+email+"' and pass='"+password+"'";

con.query(query,function(err,result){

if (len(result)){
    sess.email=email
    sess.pass=password;

    res.send(sess);

    //res.send("Login Sucessful man..!!!");
}
else{


    res.send("Invalid Login Credentials");
}

});




/*
check if email and password emailexits

*/


});


http.listen(3003,'192.168.0.108',function(){

console.log('Server Listening on port 3003 on ip 192.168.0.108');

});