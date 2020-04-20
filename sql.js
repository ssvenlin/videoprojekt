var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('media.db');
var check;
db.serialize(function() {

  db.run("CREATE TABLE if not exists lorem (info TEXT)");
  var stmt = db.prepare("INSERT INTO media VALUES (name)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM media", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.close();