const express = require('express')
const app = express()
const mysql = require("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'root',
    port: '8889',
    database: 'bigFive'
});

app.get("/myanswers", (req, res) => {
  db.query("CALL getMyAnswer();", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/searchquestion", (req, res) => {
  console.log(req.query.question)
  db.query("SELECT AVG(" + (req.query.question) + ") FROM mega;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/searchtime", (req, res) => {
  console.log(req.query.question)
  db.query("SELECT AVG(" + (req.query.question) + "_E) FROM mega;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.get("/avganswers", (req, res) => {
  db.query("CALL getAvgAnswer();", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req,res) => {
  const ext1 = req.body.ext1;
  const ext2 = req.body.ext2;
  const ext3 = req.body.ext3;
  const ext4 = req.body.ext4;
  const ext5 = req.body.ext5;
  const ext6 = req.body.ext6;
  const ext7 = req.body.ext7;
  const ext8 = req.body.ext8;
  const ext9 = req.body.ext9;
  const ext10 = req.body.ext10;
  const est1 = req.body.est1;
  const est2 = req.body.est2;
  const est3 = req.body.est3;
  const est4 = req.body.est4;
  const est5 = req.body.est5;
  const est6 = req.body.est6;
  const est7 = req.body.est7;
  const est8 = req.body.est8;
  const est9 = req.body.est9;
  const est10 = req.body.est10;
  const agr1 = req.body.agr1;
  const agr2 = req.body.agr2;
  const agr3 = req.body.agr3;
  const agr4 = req.body.agr4;
  const agr5 = req.body.agr5;
  const agr6 = req.body.agr6;
  const agr7 = req.body.agr7;
  const agr8 = req.body.agr8;
  const agr9 = req.body.agr9;
  const agr10 = req.body.agr10;
  const csn1 = req.body.csn1;
  const csn2 = req.body.csn2;
  const csn3 = req.body.csn3;
  const csn4 = req.body.csn4;
  const csn5 = req.body.csn5;
  const csn6 = req.body.csn6;
  const csn7 = req.body.csn7;
  const csn8 = req.body.csn8;
  const csn9 = req.body.csn9;
  const csn10 = req.body.csn10;
  const opn1 = req.body.opn1;
  const opn2 = req.body.opn2;
  const opn3 = req.body.opn3;
  const opn4 = req.body.opn4;
  const opn5 = req.body.opn5;
  const opn6 = req.body.opn6;
  const opn7 = req.body.opn7;
  const opn8 = req.body.opn8;
  const opn9 = req.body.opn9;
  const opn10 = req.body.opn10;
  db.query("INSERT INTO mega (EXT1, EXT2, EXT3, EXT4, EXT5, EXT6, EXT7, EXT8, EXT9, EXT10, EST1, EST2, EST3, EST4, EST5, EST6, EST7, EST8, EST9, EST10,AGR1, AGR2, AGR3, AGR4, AGR5,AGR6,AGR7,AGR8,AGR9,AGR10,CSN1,CSN2,CSN3,CSN4,CSN5,CSN6,CSN7,CSN8,CSN9,CSN10, OPN1, OPN2,OPN3,OPN4,OPN5,OPN6,OPN7,OPN8,OPN9,OPN10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
  , [ext1, ext2, ext3, ext4, ext5, ext6, ext7,ext8,ext9,ext10, est1, est2,est3,est4,est5,est6,est7,est8,est9,est10,agr1,agr2,agr3,agr4,agr5,agr6,agr7,agr8,agr9,agr10,csn1,csn2,csn3,csn4,csn5,csn6,csn7,csn8,csn9,csn10,opn1,opn2,opn3,opn4,opn5,opn6,opn7,opn8,opn9,opn10], (err,result) => {
    if(err){
      console.log(err)
    }else{
      res.send("Values inserted")
      db.query("CALL submitAnswer()")
    }
  });
});
app.listen(3002,()=>{
    console.log("Connected")
});

