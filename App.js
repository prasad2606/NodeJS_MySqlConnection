var express = require("express");
var app = express();
var mysql = require("mysql");
var con = mysql.createConnection({
host:"custom-mysql.gamification.svc.cluster.local",
port:"3306",
user:"xxuser",
password:"welcome1",
database:"sampledb"
});

con.connect();
//var sorgu = "select * from Users";
//con.query(sorgu,function(err,result,details){
//    if(err){
//        console.log("Hata var!");
//    }
//    else{
//        console.log(result);
        // console.log(details); // for details 
    }
});
//baglanti.end();

app.listen(8080);
