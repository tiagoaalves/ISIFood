const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
const saltRounds = 10;

router.post('/registar', function(req, res) {
      console.log(req.body);
      const password = req.body.password;
      const email = req.body.email;
      console.log("without hahsh:" + req.headers.password);
      var query = "";
      bcrypt.hash(password, saltRounds).then(function (hash) {
      var post = {
      email: email,
      password: password,
      };
      console.log("with hash:" + hash);
      query = global.connection.query('INSERT INTO users SET ?', post, function (err, rows, fields) {
      console.log(query.sql);
      if (!err) {
      res.status(200).location(rows.insertId).send({
      "msg": "inserted with success"
      });
      console.log("Number of records inserted: " + rows.affectedRows);
      } else {
      if (err.code == "ER_DUP_ENTRY") {
        res.status(409).send({"msg": err.code});
        console.log('Error while performing Query.', err);
        global.connection.query('error', function(err) {
              console.log("[mysql error]",err);
            });
      } else {
      res.status(400).send({"msg": err.code});
      global.connection.query('error', function(err) {
              console.log("[mysql error]",err);
            });
      }
      }
    });
});

});

module.exports = router;