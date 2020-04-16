var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var app = express();
let portnummer = 3000;

//add public folder
app.use(express.static('public'))

app.get('/', function (req, res){
  res.send({Hello: 'World'});
});

//selectdata from media
app.get('/getid', function (req, res){
  let sql = "SELECT * FROM media";
  
  let db = new sqlite3.Database('media.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the media database.');
  });

  db.all(sql, (err,rows) => {
    res.json({username: rows})
  });

  db.close((err) => {
    if (err){
    console.log(err.message);
  }
  console.log('Close the database connection.');
  });   
});

//update
app.get('/update', function (req, res){
  let sql = "SELECT * id, url, name FROM media";

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

  db.run(`INSERT INTO media(id, name) VALUES(?,?)`, function(err) {
 
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

  //close database connection
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });



var server = app.listen(portnummer, function(){

});