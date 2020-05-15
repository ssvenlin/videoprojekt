const express = require('express')
const app = express()
var sqlite3 = require('sqlite3').verbose();
var cors = require('cors')
var db = new sqlite3.Database('./media.sql');
app.use(cors())

app.use(express.urlencoded())

const port = 3000

//add public folder

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users"//http://localhost:3000/users
    db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.send({ model: rows });
    });
  });

  app.get("/media", (req, res) => {//http://localhost:3000/media
    const sql = "SELECT * FROM media"
    db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.send({ model: rows });
    });
  });

  app.get("/usermedia/:id", (req, res) => { //http://localhost:3000/usermedia/2
    const sql = "SELECT * FROM users,media, user_media WHERE user_media.userid =users.id AND user_media.mediaid=media.id AND user_media.userid=?"
    db.all(sql, [req.params.id], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.send({ model: rows });
    });
  });

  app.get("/delete", (req, res) => {
    const sql = "DELETE FROM media WHERE id = 1";
    db.all(sql, [req.params.id], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.send({ model: rows });
    });
  });

  app.get("/update", (req, res) => {
    const sql = "UPDATE users SET name = 'Sandra' WHERE id=1";
    db.all(sql, [req.params.id], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.send({ model: rows });
    });
  });

  app.post("/submit-form", (req, res) => {
    const username = req.body.username
    //...
    res.end(username);
    });
 
    
 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

process.on('SIGINT', () => {
    db.close();
    server.close();
});