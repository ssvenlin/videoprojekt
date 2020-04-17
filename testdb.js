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




//connect to database
let db = new sqlite3.Database('media.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the media database.');
  });

var server = app.listen(portnummer, function(){

});