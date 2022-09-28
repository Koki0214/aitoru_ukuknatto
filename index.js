//varstemName = document.getElementById('main'); 
//var teamName = document.getElementById('product');
const express = require('express')
const app = express()
const path = require('path');
const port = 3000


app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'public/yoyaku.html')))
//app.get('/',function(req,res){
  //console.log(req);
  //res.send('<h3>Hello World!</h3><h1>アイトル</h1><h2>-技大用教室予約システム-</h2>');
//});
app.get('/reservecheck',(req,res)=>res.sendFile(path.join(__dirname,'public/reservecheck.html')))
app.listen(port, () => 
  console.log('server started'));