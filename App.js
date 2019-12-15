var express = require("express");
var app = express();
var mysql = require("mysql");
var con = mysql.createConnection('mysql://xxuser:welcome1@custom-mysql.gamification.svc.cluster.local:3306/sampledb');

con.connect(function(err){
if(err) {
    console.log(err);    
});
//var ibmcat = "select * from XXIBM_PRODUCT_CATALOG";
//con.query(ibmcat,function(err,result,details){
//    if(err){
//        console.log("Hata var!");
//       }
//   else{
//        console.log(result);
//         console.log(details); // for details 
 //   }
//});
con.end();

app.listen(8080);
