{"filter":false,"title":"bd.js","tooltip":"/backend/bd.js","undoManager":{"mark":30,"position":30,"stack":[[{"start":{"row":0,"column":0},"end":{"row":50,"column":3},"action":"insert","lines":["router.post('/admins', function(req, res) {","      console.log(req.body);","      console.log(\"routeadmins\");","      const id_utilizador = req.body.id_utilizador;","      const nome = req.body.nome;","      const idade = req.body.idade;","      const sexo = req.body.sexo;","      const morada = req.body.morada;","      const password = req.body.password;","      const email = req.body.email;","      const cargo = req.body.cargo;","      console.log(req.body.cargo);","      console.log(\"without hahsh:\" + req.headers.password);","      var query = \"\";","      bcrypt.hash(password, saltRounds).then(function (hash) {","      var post = {","      id_utilizador : id_utilizador,","      nome: nome,","      email: email,","      password: hash,","      idade : idade,","      sexo : sexo,","      morada : morada,","      cargo : cargo,","      };","      console.log(\"with hash:\" + hash);","      query = global.connection.query('INSERT INTO utilizador SET ?', post, function (err, rows, fields) {","      console.log(query.sql);","      if (!err) {","      res.status(200).location(rows.insertId).send({","      \"msg\": \"inserted with success\"","      });","      console.log(\"Number of records inserted: \" + rows.affectedRows);","      } else {","      if (err.code == \"ER_DUP_ENTRY\") {","        res.status(409).send({\"msg\": err.code});","        console.log('Error while performing Query.', err);","        global.connection.query('error', function(err) {","              console.log(\"[mysql error]\",err);","            });","      } else {","      res.status(400).send({\"msg\": err.code});","      global.connection.query('error', function(err) {","              console.log(\"[mysql error]\",err);","            });","      }","      }","    });","});","","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":22},"action":"insert","lines":["const express = require('express');","const router = express.Router();","var bcrypt = require('bcrypt');","const saltRounds = 10;"],"id":3}],[{"start":{"row":14,"column":35},"end":{"row":16,"column":34},"action":"remove","lines":["","      const cargo = req.body.cargo;","      console.log(req.body.cargo);"],"id":5}],[{"start":{"row":7,"column":33},"end":{"row":12,"column":37},"action":"remove","lines":["","      const id_utilizador = req.body.id_utilizador;","      const nome = req.body.nome;","      const idade = req.body.idade;","      const sexo = req.body.sexo;","      const morada = req.body.morada;"],"id":6}],[{"start":{"row":6,"column":28},"end":{"row":7,"column":33},"action":"remove","lines":["","      console.log(\"routeadmins\");"],"id":7}],[{"start":{"row":12,"column":18},"end":{"row":14,"column":17},"action":"remove","lines":["","      id_utilizador : id_utilizador,","      nome: nome,"],"id":8}],[{"start":{"row":14,"column":21},"end":{"row":18,"column":20},"action":"remove","lines":["","      idade : idade,","      sexo : sexo,","      morada : morada,","      cargo : cargo,"],"id":9}],[{"start":{"row":17,"column":60},"end":{"row":17,"column":61},"action":"remove","lines":["r"],"id":10}],[{"start":{"row":17,"column":59},"end":{"row":17,"column":60},"action":"remove","lines":["o"],"id":11},{"start":{"row":17,"column":58},"end":{"row":17,"column":59},"action":"remove","lines":["d"]},{"start":{"row":17,"column":57},"end":{"row":17,"column":58},"action":"remove","lines":["a"]},{"start":{"row":17,"column":56},"end":{"row":17,"column":57},"action":"remove","lines":["z"]},{"start":{"row":17,"column":55},"end":{"row":17,"column":56},"action":"remove","lines":["i"]},{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"remove","lines":["l"]},{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"remove","lines":["i"]},{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"remove","lines":["t"]},{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"remove","lines":["u"]}],[{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["u"],"id":12},{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"insert","lines":["s"]},{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"insert","lines":["e"]},{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"insert","lines":["r"]},{"start":{"row":17,"column":55},"end":{"row":17,"column":56},"action":"insert","lines":["s"]}],[{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"remove","lines":["s"],"id":13},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"remove","lines":["n"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"remove","lines":["i"]},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"remove","lines":["m"]},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"remove","lines":["d"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"remove","lines":["a"]}],[{"start":{"row":5,"column":14},"end":{"row":5,"column":15},"action":"insert","lines":["r"],"id":14},{"start":{"row":5,"column":15},"end":{"row":5,"column":16},"action":"insert","lines":["e"]},{"start":{"row":5,"column":16},"end":{"row":5,"column":17},"action":"insert","lines":["g"]},{"start":{"row":5,"column":17},"end":{"row":5,"column":18},"action":"insert","lines":["i"]},{"start":{"row":5,"column":18},"end":{"row":5,"column":19},"action":"insert","lines":["s"]},{"start":{"row":5,"column":19},"end":{"row":5,"column":20},"action":"insert","lines":["t"]},{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["o"]}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"remove","lines":["o"],"id":15}],[{"start":{"row":5,"column":20},"end":{"row":5,"column":21},"action":"insert","lines":["a"],"id":16},{"start":{"row":5,"column":21},"end":{"row":5,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":45},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["c"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["o"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["n"]},{"start":{"row":6,"column":7},"end":{"row":6,"column":8},"action":"insert","lines":["s"]},{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["o"]},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["l"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["e"]},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["."]},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["l"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["o"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":17},"action":"insert","lines":["()"],"id":18}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["e"],"id":19},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["n"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["r"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["r"],"id":20}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["t"],"id":21},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["r"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["o"]}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"remove","lines":["o"],"id":22},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["r"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["t"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":["n"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"remove","lines":["e"]}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":18},"action":"insert","lines":["''"],"id":23}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["e"],"id":24},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["n"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["t"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["r"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["o"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":[";"],"id":25}],[{"start":{"row":42,"column":3},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":24},"action":"insert","lines":["module.exports = router;"],"id":27}],[{"start":{"row":5,"column":45},"end":{"row":6,"column":26},"action":"remove","lines":["","    console.log('entroi');"],"id":28}],[{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"remove","lines":["h"],"id":29},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"remove","lines":["s"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":["a"]}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"remove","lines":["h"],"id":30}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["p"],"id":31},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["a"]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["s"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["s"]},{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["w"]}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":21},"action":"remove","lines":["passw"],"id":32},{"start":{"row":14,"column":16},"end":{"row":14,"column":24},"action":"insert","lines":["password"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":39},"end":{"row":16,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":45,"mode":"ace/mode/javascript"}},"timestamp":1591047909601,"hash":"b72b77944624c56c0c8a1c971c793859cc827296"}