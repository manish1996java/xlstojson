const xlstojson = require("xls-to-json");
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");
const bodyparser = require("body-parser");
const express = require("express");
const app = express();



app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json)

const server = http.createServer((req, res)=>{
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    console.log(url.parse(req.url,true));
})

server.listen(2000);

// xlstojson({
//     input: "./Financial Sample.xlsx",
//     output: "output.json",
//     sheet: "Sheet1",
//     rowstoskip :5
// },(error,result)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(result);
//     }
// })

// console.log(__dirname);
// try{
// fs.readFile(path.join(__dirname,'output.json'),callback);
// }catch(eror){
//     console.log(eror);
// }
// console.log("done");


// function callback(error,data){
//     var arr = [];
//     if(error){
//         console.log(error);
//     }else{
//         obj=JSON.parse(data.toString());
//         console.log(obj);
//         for(var ob of obj){
//             console.log(ob["Country"]);
//         }
//         // obj.forEach(element => {
//         //     console.log(element);
//         // });
//     }
// }



