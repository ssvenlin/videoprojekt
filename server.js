var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var app = express();
let portnummer = 3000;




let db = new sqlite3.Database('media.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the media database.');
  });

var server = app.listen(portnummer, function(){

});