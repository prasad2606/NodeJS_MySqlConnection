var express = require("express");
var app = express();
var mysql = require("mysql");
var baglanti = mysql.createConnection({
host:"localhost",
port:"3306",
user:"ertan",
password:"ertan",
database:"nodejs"
});

baglanti.connect();
var sorgu = "select * from Users";
baglanti.query(sorgu,function(err,result,details){
    if(err){
        console.log("Hata var!");
    }
    else{
        console.log(result);
        // console.log(details); // for details 
    }
});
baglanti.end();

app.listen(8000);
