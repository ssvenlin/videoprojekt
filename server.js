var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var app = express();
let portnummer = 3000;

//add public folder
app.use(express.static('public'))

app.get('/', function (req, res){
  res.send("Hello World");
});


let db = new sqlite3.Database('media.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the media database.');
  });

var server = app.listen(portnummer, function(){

});