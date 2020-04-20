var sqlite3 = require("sqlite3"),
    TransactionDatabase = require("sqlite3-transactions").TransactionDatabase;

    var db = new TransactionDatabase(
      new sqlite3.Database("media.sqlite", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE)
  );
 
db.exec("CREATE TABLE ...", function(err) {
    // table created
});

// Begin a transaction.
db.beginTransaction(function(err, transaction) {
  // Now we are inside a transaction.
  // Use transaction as normal sqlite3.Database object.
  transaction.run("INSERT ...");
  database.run("INSERT ..."); 
  someAsync(function() {
    
    // Remember to .commit() or .rollback()
    transaction.commit(function(err) {
        if (err) return console.log("NO :-( commit() failed.", err);
        console.log("YES commit() was successful.");
    });
    // or transaction.rollback()
    
});
});