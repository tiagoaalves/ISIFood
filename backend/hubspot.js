const request = require('request');
const express = require('express');
const router = express.Router();




//REGISTAR CLIENTE

//function hubspotRegistarCliente (query_fnome, query_email, query_morada, query_lnome, query_telemovel, query_cpostal, callback){

router.post('/hubspotRegistarCliente', function(req, res) {
  console.log(req.body);
  console.log('entrou registo');
  var res = req.body.nome.split(" ");
  var email = req.body.email;
  var firstName = res[0];
  console.log(firstName);
  var lastName = res[1];
  var address = req.body.morada;
  //var zip;
  var phone = req.body.telemovel;


  var options = {
    'method': 'POST',
    'url': ' https://api.hubapi.com/contacts/v1/contact/?hapikey=15ba3441-633c-4b12-bd4e-baacdc9afbd2',
    'headers': {
      'Content-Type': 'application/json',
      'Cookie': '__cfduid=da27dcbe5ee4db501fd5e26383eb7dc411589125238'
    },
    body: JSON.stringify({
      "properties": [{ "property": "email", "value": email },
        { "property": "firstname", "value": firstName },
        { "property": "lastname", "value": lastName },
        { "property": "phone", "value": phone },
        { "property": "address", "value": address },
      ]
    })

  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    addVid(JSON.parse(response.body).vid, email);
    console.log(JSON.parse(response.body).vid);
  });
});

function addVid(id, email) {
  var query = "";
  query = global.connection.query(`UPDATE users SET id='${id}' WHERE email='${email}'`, function(err, rows, fields) {
    console.log(query.sql);
    if (!err) {
      // res.status(200).location(rows.insertId).send({
      //   "msg": "inserted with success"
      // });
      console.log("Number of records inserted: " + rows.affectedRows);
    }
    else {
      if (err.code == "ER_DUP_ENTRY") {
        //res.status(409).send({ "msg": err.code });
        console.log('Error while performing Query.', err);
        global.connection.query('error', function(err) {
          console.log("[mysql error]", err);
        });
      }
      else {
        //res.status(400).send({ "msg": err.code });
        global.connection.query('error', function(err) {
          console.log("[mysql error]", err);
        });
      }
    }
  });
}



router.post('/hubspotUpdateCliente', function(req, res) {

  var email;
  var firstName;
  var lastName;
  var address;
  var zip;
  var phone;

  var options = {
    'method': 'POST',
    'url': 'https://api.hubapi.com/contacts/v1/contact/vid/401/profile?hapikey=15ba3441-633c-4b12-bd4e-baacdc9afbd2',
    'headers': {
      'Content-Type': 'application/json',
      'Cookie': '__cfduid=da27dcbe5ee4db501fd5e26383eb7dc411589125238'
    },
    body: JSON.stringify({
      "properties": [{ "property": "email", "value": email }, { "property": "firstname", "value": firstName }, { "property": "lastname", "value": lastName },
        { "property": "address", "value": address }, { "property": "zip", "value": zip }, { "property": "phone", "value": phone }
      ]
    })

  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
    }
    else {
      res.status(200).json({ error: null, response: null });
    }

  });

});


//UPDATE CLIENTE

//function hubspotUpdateCliente(email, firstName, lastName, phone, address, zip, message,  vid, callback) {


router.post('/hubspotUpdateCliente', function(req, res) {

  var email;
  var firstName;
  var lastName;
  var address;
  var zip;
  var phone;

  var options = {
    'method': 'POST',
    'url': 'https://api.hubapi.com/contacts/v1/contact/vid/401/profile?hapikey=15ba3441-633c-4b12-bd4e-baacdc9afbd2',
    'headers': {
      'Content-Type': 'application/json',
      'Cookie': '__cfduid=da27dcbe5ee4db501fd5e26383eb7dc411589125238'
    },
    body: JSON.stringify({
      "properties": [{ "property": "email", "value": email }, { "property": "firstname", "value": firstName }, { "property": "lastname", "value": lastName },
        { "property": "address", "value": address }, { "property": "zip", "value": zip }, { "property": "phone", "value": phone }
      ]
    })

  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
    }
    else {
      res.status(200).json({ error: null, response: null });
    }

  });

});

router.post('/adicinarCompra', function(req, res) {

  var email;
  var firstName;
  var lastName;
  var address;
  var zip;
  var phone;

  var options = {
    'method': 'POST',
    'url': 'https://api.hubapi.com/contacts/v1/contact/vid/401/profile?hapikey=15ba3441-633c-4b12-bd4e-baacdc9afbd2',
    'headers': {
      'Content-Type': 'application/json',
      'Cookie': '__cfduid=da27dcbe5ee4db501fd5e26383eb7dc411589125238'
    },
    body: JSON.stringify({ "properties": [{ "property": "message", "value": 1 }] })

  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
    }
    else {
      res.status(200).json({ error: null, response: null });
    }

  });

});



//LISTAR CLIENTES

router.get('/getContacts', function(req, res) {
  var options = {
    'method': 'GET',
    'url': ' https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=15ba3441-633c-4b12-bd4e-baacdc9afbd2',
    'headers': {
      'Content-Type': 'application/json'
    },
  };
  request(options, function(error, response) {
    console.log(JSON.parse(response.body));
    if (error) {
      res.status(500).json({ error: error, response: null });
    }
    else if (JSON.parse(response.body).length == 0) {
      res.status(204).json({ error: null, response: JSON.parse(response.body) });
    }
    else {
      res.status(200).json({ error: null, response: JSON.parse(response.body) });
    }
    //console.log(JSON.parse(response.body)[0]);
  });

});





module.exports = router;
