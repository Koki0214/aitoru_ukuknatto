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
//app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'public/yoyaku.html')))
//urlでreservecheckが指定された時、予約確認画面に遷移する
//app.get('/reservecheck',(req,res)=>res.sendFile(path.join(__dirname,'public/reservecheck.html')))
//予約確認画面で、予約画面に戻るボタンを押された時、予約画面に遷移する
//app.get('/yoyaku',(req,res)=>res.sendFile(path.join(__dirname,'public/yoyaku.html')))

app.get('/',(req,res) => {
  const query = "select id,name from book;";
  db.all(query,(err,rows)=>{
    if(err){
      console.log(err.message);
    }
    res.render("yoyaku.ejs",{results:rows});
  })
});

app.get('/reservecheck/:id',(req,res)=> {
  const id=req.params.id;
  const query = "select name from book where id=?";
  
  db.all(query,[id],(err,rows)=>{
    if(err){
      console.log(err.message);
    }
    res.render("reservecheck.ejs",{results:rows});
  })
});

app.get('/rireki',(req,res)=> {
  const query = "select name from book where status=0";
  
  db.all(query,(err,rows)=>{
    if(err){
      console.log(err.message);
    }
    res.render("rireki.ejs",{results:rows});
  })
});


app.listen(port, () => 
  console.log('server started'));