//varstemName = document.getElementById('main'); 
//var teamName = document.getElementById('product');
const express = require('express')
const app = express()
const path = require('path');
const port = 3000

const bodyParser = require("body-parser");
app.set("view_engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
module.exports=app;

const sqlite3 = require('sqlite3').verbose();
const fs = require("fs");
const dbfile="room.db";
const exists = fs.existsSync(dbfile);
const db = new sqlite3.Database(dbfile);

//起動時に予約画面を表示する
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'public/yoyaku.html')))
//urlでreservecheckが指定された時、予約確認画面に遷移する
app.get('/reservecheck',(req,res)=>res.sendFile(path.join(__dirname,'public/reservecheck.html')))
//予約確認が
app.get('/yoyaku',(req,res)=>res.sendFile(path.join(__dirname,'public/yoyaku.html')))

app.listen(port, () => 
  console.log('server started'));