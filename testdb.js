var express = require('express');
const sqlite3 = require('sqlite3').verbose();


var app = express();
let portnummer = 3000;

app.get('/insert', function (req, res){
    let sql = 'SELECT * FROM media';

    let db = new sqlite3.Database('media.db', (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the media database.');
      });
    
      db.all(sql, (err,rows) => {
        res.json({name: rows})
      });
    
      db.close((err) => {
        if (err){
        console.log(err.message);
      }
      console.log('Close the database connection.');
      });   
    });

app.get('/update', function (req, res){

    var sql = "UPDATE media SET name = 'Sandra' WHERE id=5";
   
  let db = new sqlite3.Database('media.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the media database.');
  });
  db.all(sql, (err,rows) => {
    res.json({name: rows})
  });

  db.close((err) => {
    if (err){
    console.log(err.message);
  }
  console.log('Close the database connection.');
  });
});

app.get('/delete', function (req,res){
  let sql = 'DELETE FROM media WHERE id=6';
  
})



//connect to database
let db = new sqlite3.Database('media.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the media database.');
  });

var server = app.listen(portnummer, function(){

});