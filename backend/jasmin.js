const express = require('express');
const router = express.Router();
const axios = require('axios');
const request = require('request');

let applicationid = "ISIFOOD";
let clientsecret = "d6965678-0f4e-4688-b2ed-4310f09e6fdc";
let urltoken = "https://identity.primaverabss.com/core/connect/token";
var token;
var ids = 1;

// access token
router.post('/getToken', function(req, res) {
  var options = {
    'method': 'POST',
    'url': "https://identity.primaverabss.com/core/connect/token",
    'headers': {
      'Content-Type': ['application/x-www-form-urlencoded', 'application/x-www-form-urlencoded'],
      'Authorization': 'Basic SVNJRk9PRDo2MWMyNzUyYS1kNjIxLTQ1ZWYtODUxOC01YjQxOGI5ZDViYjc='
    },
    form: {
      'client_id': "ISIFOOD",
      'client_secret': "61c2752a-d621-45ef-8518-5b418b9d5bb7",
      'grant_type': 'client_credentials',
      'scope': 'application'
    }
  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
      console.log(response.body)
    }
    else {
      let result = JSON.parse(response.body);
      saveTokens(result.access_token);
      console.log("jasmin auth ok");
    }
  });
});

// guardar na bd
function saveTokens(tokens) {
  var query = '';
  return query = global.connection.query(`UPDATE tokens SET acess_token = '${tokens}', refresh_token ='' WHERE idtokens = 2`, function(error, results, fields) {
    if (error) {
      return error;
    }
    else {
      token = tokens;
      return results;
      console.log("insert ok");
    }
  });
}

router.post('/getProducts', function(req, res) {
  var request = require('request');
  //token
  var options = {
    'method': 'POST',
    'url': "https://identity.primaverabss.com/core/connect/token",
    'headers': {
      'Content-Type': ['application/x-www-form-urlencoded', 'application/x-www-form-urlencoded'],
      'Authorization': 'Basic SVNJRk9PRDo2MWMyNzUyYS1kNjIxLTQ1ZWYtODUxOC01YjQxOGI5ZDViYjc='
    },
    form: {
      'client_id': "ISIFOOD",
      'client_secret': "61c2752a-d621-45ef-8518-5b418b9d5bb7",
      'grant_type': 'client_credentials',
      'scope': 'application'
    }
  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
      console.log(response.body)
    }
    //endtoken
    else {
      let result = JSON.parse(response.body);
      token = result.access_token;
      console.log("jasmin auth okkkk");
      //produtos
      //primeiro vai aos materials items buscar todos os items que nós inserimos e pegar nos "baseEntityId" de cada um
      var options1 = {
        'method': 'GET',
        'url': 'https://my.jasminsoftware.com/api/236376/236376-0001/materialsCore/materialsItems/extension',
        'headers': {
          'Authorization': [`Bearer ${token}`],
          'Content-Type': 'application/json'
        }
      };
      request(options1, function(error1, response1) {
        if (error1) {
          throw new Error(error1);
        }
        //endprodutos
        else {
          let result1 = JSON.parse(response1.body);
          let materialiteminfos = [];
          for (let i = 0; i < result1.length; i++) {
            let obj = {
              'id': result1[i].baseEntityId,
              'preco': result1[i].materialsItemWarehouses[0].calculatedUnitCost.amount,
              'stock': result1[i].materialsItemWarehouses[0].stockBalance
            }
            materialiteminfos.push(obj);
          }
          let options2 = {
            'method': 'GET',
            'url': 'https://my.jasminsoftware.com/api/236376/236376-0001/businessCore/items/',
            'headers': {
              'Authorization': [`Bearer ${token}`],
              'Content-Type': 'application/json'
            }
          }
          request(options2, function(error2, response2) {
            if (error2) {
              throw new Error(error2);
            }
            else {
              let result2 = JSON.parse(response2.body);
              let prods = [];
              for (let i = 0; i < result2.length; i++) {
                for (let j = 0; j < materialiteminfos.length; j++) {
                  if (result2[i].id == materialiteminfos[j].id) {
                    let prod = {
                      'id': materialiteminfos[j].id,
                      'nome': result2[i].description,
                      'desc': result2[i].complementaryDescription,
                      'preco': materialiteminfos[j].preco,
                      'stock': materialiteminfos[j].stock
                    }
                    prods.push(prod);
                  }
                }
              }
              res.status(200).json({ error: null, response: prods });
            }
          });
        }
      });
    }
  });
});

//get artigo de inventário por id
router.post('/getProduct/:id', function(req, res) {
  var request = require('request');
  var id = req.params.id; //id do produto escolhido
  var options = {
    'method': 'GET',
    'url': `https://my.jasminsoftware.com/api/236376/236376-0001/materialsCore/materialsItems/${id}/extension`,
    'headers': {
      'Authorization': [`Bearer ${token}`],
      'Content-Type': 'application /json'
    }
  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
      console.log(response.body)
    }
    else {
      let result = JSON.parse(response.body);
      var qtd = 0;
      var warehouses = result.materialsItemWarehouses;
      console.log(warehouses.length);
      for (var i = 0; i < warehouses.length; i++) {
        qtd += warehouses[i].stockBalance;
      }
      return qtd;
    }
  });
});


//Remove "qt" unidades de um dado artigo "id". Utilizado para efetuar as encomendas.
router.post('/stockDelete/:id/:qt', function(req, res) {
  var id = req.params.id;
  var qt = req.params.qt;

  var request = require('request');
  //token
  var options = {
    'method': 'POST',
    'url': "https://identity.primaverabss.com/core/connect/token",
    'headers': {
      'Content-Type': ['application/x-www-form-urlencoded', 'application/x-www-form-urlencoded'],
      'Authorization': 'Basic SVNJRk9PRDo2MWMyNzUyYS1kNjIxLTQ1ZWYtODUxOC01YjQxOGI5ZDViYjc='
    },
    form: {
      'client_id': "ISIFOOD",
      'client_secret': "61c2752a-d621-45ef-8518-5b418b9d5bb7",
      'grant_type': 'client_credentials',
      'scope': 'application'
    }
  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error)
    }
    else {
      let result = JSON.parse(response.body);
      token = result.access_token;
      console.log("jasmin auth ok");
      //end token
      //todos os materials items para comparar com o id
      var options1 = {
        'method': 'GET',
        'url': 'https://my.jasminsoftware.com/api/236376/236376-0001/materialsCore/materialsItems/extension',
        'headers': {
          'Authorization': [`Bearer ${token}`],
          'Content-Type': 'application/json'
        }
      };
      request(options1, function(error1, response1) {
        if (error1) {
          throw new Error(error1);
        }
        else {
          let result1 = JSON.parse(response1.body);
          let stockexistente;
          let lineId;
          for (let i = 0; i < result1.length; i++) {
            if (result1[i].baseEntityId == id) {
              stockexistente = result1[i].materialsItemWarehouses[0].stockBalance;
              lineId = result1[i].materialsItemWarehouses[0].id;
            }
          }
          let stck = stockexistente - qt;
          let stockfinal = JSON.stringify(stck)
          var options2 = {
            'method': 'GET',
            'url': `https://my.jasminsoftware.com/api/236376/236376-0001/businessCore/items/${id}`,
            'headers': {
              'Authorization': [`Bearer ${token}`],
              'Content-Type': 'application/json'
            }
          }
          request(options2, function(error2, response2) {
            if (error2) {
              throw new Error(error2);
            }
            else {
              let itemkey = (JSON.parse(response2.body)).itemKey;
              var options3 = {
                'method': 'PUT',
                'url': `https://my.jasminsoftware.com/api/236376/236376-0001/materialsCore/materialsItems/${itemkey}/materialsItemWarehouses/${lineId}/stockBalance`,
                'headers': {
                  'Authorization': [`Bearer ${token}`],
                  'Content-Type': 'application /json'
                },
                body: `${stockfinal}`
              };
              request(options3, function(error3, response3) {
                if (error3) {
                  throw new Error(error3)
                }
                else {
                  res.status(200).json({ error: null });
                }
              });
            }
          });
        }
      });
    }
  });
});

//Altera o stock disponível do artigo "id" para a quantidade "qt". Utilizado para os admins alterarem o stock de um dado item
router.post('/stockChange/:id/:qt', function(req, res) {
  var id = req.params.id; //id do produto escolhido
  var qt = req.params.qt; //quantidade a remover do stock

  var request = require('request');
  //token
  var options = {
    'method': 'POST',
    'url': "https://identity.primaverabss.com/core/connect/token",
    'headers': {
      'Content-Type': ['application/x-www-form-urlencoded', 'application/x-www-form-urlencoded'],
      'Authorization': 'Basic SVNJRk9PRDo2MWMyNzUyYS1kNjIxLTQ1ZWYtODUxOC01YjQxOGI5ZDViYjc='
    },
    form: {
      'client_id': "ISIFOOD",
      'client_secret': "61c2752a-d621-45ef-8518-5b418b9d5bb7",
      'grant_type': 'client_credentials',
      'scope': 'application'
    }
  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error)
    }
    else {
      let result = JSON.parse(response.body);
      token = result.access_token;
      console.log("jasmin auth ok");
      //end token
      //todos os materials items para comparar com o id
      var options1 = {
        'method': 'GET',
        'url': 'https://my.jasminsoftware.com/api/236376/236376-0001/materialsCore/materialsItems/extension',
        'headers': {
          'Authorization': [`Bearer ${token}`],
          'Content-Type': 'application/json'
        }
      };
      request(options1, function(error1, response1) {
        if (error1) {
          throw new Error(error1);
        }
        else {
          let result1 = JSON.parse(response1.body);
          let lineId;
          for (let i = 0; i < result1.length; i++) {
            if (result1[i].baseEntityId == id) {
              lineId = result1[i].materialsItemWarehouses[0].id;
            }
          }
          let stockfinal = JSON.stringify(qt)
          var options2 = {
            'method': 'GET',
            'url': `https://my.jasminsoftware.com/api/236376/236376-0001/businessCore/items/${id}`,
            'headers': {
              'Authorization': [`Bearer ${token}`],
              'Content-Type': 'application/json'
            }
          }
          request(options2, function(error2, response2) {
            if (error2) {
              throw new Error(error2);
            }
            else {
              let itemkey = (JSON.parse(response2.body)).itemKey;
              var options3 = {
                'method': 'PUT',
                'url': `https://my.jasminsoftware.com/api/236376/236376-0001/materialsCore/materialsItems/${itemkey}/materialsItemWarehouses/${lineId}/stockBalance`,
                'headers': {
                  'Authorization': [`Bearer ${token}`],
                  'Content-Type': 'application /json'
                },
                body: `${stockfinal}`
              };
              request(options3, function(error3, response3) {
                if (error3) {
                  throw new Error(error3)
                }
                else {
                  res.status(200).json({ error: null });
                }
              });
            }
          });
        }
      });
    }
  });
});
module.exports = router;
