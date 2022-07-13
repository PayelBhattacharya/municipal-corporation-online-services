const express = require('express');
const app1 = express();
const path = require('path');
const router = express.Router();
var mysql = require('mysql');
var alert = require('alert');
var bodyParser = require('body-parser');
app1.use(bodyParser.urlencoded({extended: false}));
app1.use(bodyParser.json());

app1.use(express.static('assets'))


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_js_application"
});


//code for registration
app1.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/page1.html'));
});
/*
app1.post('/submit',function(req,res){
  var name=req.body.fname;
  var email=req.body.femail;
  var address=req.body.faddress;
  var contact=req.body.fcontact;
  var ward=req.body.fward;
  var complain=req.body.fcomplain;
  //write the data updating code here...
  var sql = "";
  con.query(sql,function(err,result){
      if(err) throw err;
      console.log("Record inserted...");
      alert("Success");
      res.redirect('/');
  });
});

*/


//for complain registration
app1.use('/', router);
app1.listen(process.env.port || 3001);
console.log('Running at Port 3001');


