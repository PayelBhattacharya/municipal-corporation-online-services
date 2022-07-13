const express = require('express');
const app1 = express();
const path = require('path');
const router = express.Router();
var mysql = require('mysql');
var alert = require('alert');
var bodyParser = require('body-parser');
app1.use(bodyParser.urlencoded({extended: false}));
app1.use(bodyParser.json());

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_js_application'
});
conn.connect(function(err){
  if (err) throw err;
  console.log("Connection Successful...");
});

app1.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/complain.html'));
});

app1.post('/submit',function(req,res){
  var name=req.body.fname;
  var email=req.body.femail;
  var address=req.body.faddress;
  var contact=req.body.fcontact;
  var complain=req.body.fcomplain;
  //write the data updating code here...
  var sql = "INSERT INTO complain (name, email, address, contact, complain) VALUES ('"+name+"', '"+email+"','"+address+"', '"+contact+"', '"+complain+"')";
  conn.query(sql,function(err,result){
      if(err) throw err;
      console.log("Record inserted...");
      alert("Success");
      res.redirect('/');
  });
});

app1.listen(3001, function(){
  console.log("Running on port 3001");
});