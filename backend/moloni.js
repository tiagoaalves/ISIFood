const express = require('express');
const router = express.Router();
const axios = require('axios');
var request = require('request');
var tokensSet = false;
var acessToken;
var refreshToken;




//funcao que faz a autenticacao no moloni de forma a receber novos tokens (é suposto acontecer de 14 em 14 dias)
function getTokens() {
  console.log('gettokens');
  var options = {
    'method': 'GET',
    'url': 'https://api.moloni.pt/v1/grant/?grant_type=password&client_id=isifood&client_secret=c0634ef5ba846d53ba31e0b455327d7aa9cd76d8&username=a83137@alunos.uminho.pt&password=passISIFOOD2020!',
    'headers': {
      'Cookie': 'PHPSESSID=f1i3ubbra970rsi2gr8s447f65'
    }
  };
  request(options, function(error, response) {
    console.log(response.body);
    if (error) {
      console.log(error);
    }
    else {
      saveTokens(JSON.parse(response.body).access_token, JSON.parse(response.body).refresh_token);
    }
  });
}

//funcao responsavel por atribuir o valor dos tokens às variaveis em cima "acessToken" e "refreshToken"
function setTokens() {
  var query = global.connection.query(`SELECT acess_token, refresh_token FROM tokens WHERE idtokens = 1`, function(error, results, fields) {
    console.log(query.sql);
    if (error) {
      console.log(error);
    }
    else {
      acessToken = results[0].acess_token;
      refreshToken = results[0].refresh_token;
      tokensSet = true;
      console.log('tokens inseridos');
    }
  });
}

//funcao que é chamada para pedir uma nova acess_token ao maoloni
function refreshAcessToken() {
  console.log('refreshacesstoken');
  if (tokensSet === false) {
    setTokens();
  }
  var options = {
    'method': 'GET',
    'url': `https://api.moloni.pt/v1/grant/?grant_type=refresh_token&client_id=isifood&client_secret=c0634ef5ba846d53ba31e0b455327d7aa9cd76d8&refresh_token=${refreshToken}`,
    'headers': {
      'Cookie': 'PHPSESSID=f1i3ubbra970rsi2gr8s447f65'
    }
  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log("resposta: " + response.body);
    if (error) {
      return error;
    }
    else if ("Invalid refresh token" === JSON.parse(response.body).error_description) {
      getTokens();
    }
    else {
      var query = global.connection.query(`UPDATE tokens SET acess_token = '${JSON.parse(response.body).access_token}' , refresh_token ='${JSON.parse(response.body).refresh_token}' WHERE idtokens = 1`, function(error, results, fields) {
        console.log(query.sql);
        if (error) {
          return error;
        }
        else {
          acessToken = JSON.parse(response.body).access_token;
          refreshToken = JSON.parse(response.body).refresh_token;
          return results;
        }
      });
    }
  });
}


//funcao que é chamada para guardar os tokens na bd
function saveTokens(moloniAcessToken, moloniRefreshToken) {
  var query = '';
  return query = global.connection.query(`UPDATE tokens SET acess_token = '${moloniAcessToken}', refresh_token ='${moloniRefreshToken}' WHERE idtokens = 1`, function(error, results, fields) {
    console.log(query.sql);
    if (error) {
      return error;
    }
    else {
      acessToken = moloniAcessToken;
      refreshToken = moloniRefreshToken;
      return results;
    }
  });
}

function encomendasCriadas() {

}

function encomendasFeitas() {

}

function encomendasEntregues() {

}

router.get('/setTokens', function(req, res) {
  if (tokensSet === false) {
    setTokens();
    res.status(200).json({ error: null, response: null });
  }
});

// router.post('/getEncomendas', function(req, res) {
//   if (tokensSet === false) {
//     setTokens();
//   }
//   //axios.post(`https://api.moloni.pt/v1/products/getAll/?access_token=${acessToken}`, {
//   var options = {
//     'method': 'POST',
//     'url': `https://api.moloni.pt/sandbox/products/getAll/?access_token=${acessToken}`,
//     'headers': {
//       'Cookie': 'PHPSESSID=vqpuolbptrjiravakmdsjgnb36'
//     },
//     formData: {
//       'company_id': '0',
//       'category_id': '2181028'
//     }
//   };
//   request(options, function(error, response) {
//     console.log(response.body);
//     if (error) throw new Error(error);
//     if ("Invalid access token." === JSON.parse(response.body).error_description) {
//       refreshAcessToken();
//     }
//     else {
//       res.status(200).json({ error: null, response: JSON.parse(response.body) });
//     }
//   });
// });

router.post('/getEmpresas', function(req, res) {
  var options = {
    'method': 'POST',
    'url': `https://api.moloni.pt/v1/companies/getAll/?access_token=${acessToken}`,
    'headers': {
      'Cookie': 'PHPSESSID=f1i3ubbra970rsi2gr8s447f65'
    }
  };
  request(options, function(error, response) {
    if (error) {
      throw new Error(error);
    }
    else {
      console.log(response.body);
    }
  });

});

router.post('/getCategorias', function(req, res) {
  var options = {
    'method': 'POST',
    'url': `https://api.moloni.pt/v1/productCategories/getAll/?access_token=${acessToken}`,
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': 'PHPSESSID=f1i3ubbra970rsi2gr8s447f65'
    },
    formData: {
      'company_id': '127797',
      'parent_id': ''
    }
  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    // if ("Invalid access token." === JSON.parse(response.body).error_description) {
    //   refreshAcessToken();
    // }
    // else {
    res.status(200).json({ error: null, response: JSON.parse(response.body) });
    //}
  });

});

router.post('/postEncomendas', function(req, res) {
  var options = {
    'method': 'POST',
    'url': `https://api.moloni.pt/v1/products/insert/?access_token=${acessToken}`,
    'headers': {
      'Cookie': 'PHPSESSID=u38se9cb81lnout4c639orm0e0'
    },
    formData: {
      'company_id': '127797',
      'category_id': '2161556',
      'type': '1',
      'name': 'ISIFOODUSER',
      'summary': 'strawberry',
      'reference': 'EXE.14',
      'ean string': '',
      'price': '12.99',
      'unit_id': '1',
      'has_stock': '0',
      'stock': '',
      'minimum_stock': '',
      'pos_favorite': '',
      'at_product_category': '',
      //'exemption_reason': '',
      'taxes': '',
      'suppliers': '',
      'properties': '',
      'warehouses': '',
      'exemption_reason': 'no reason'
    }
  };
  request(options, function(error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });


});

router.post('/getEncomendas', function(req, res) {
  //console.log('getencomenda');
  var options = {
    'method': 'POST',
    'url': `https://api.moloni.pt/v1/products/getAll/?access_token=${acessToken}`,
    'headers': {
      'Cookie': 'PHPSESSID=u38se9cb81lnout4c639orm0e0'
    },
    formData: {
      'company_id': '127797',
      'category_id': '2161556',
      'qty': '',
      'offset': '',
      'with_invisible': ''
    }
  };
  request(options, function(error, response) {
    var results =JSON.parse(response.body);
   // console.log(results);
    if ("Invalid access token." === JSON.parse(response.body).error_description) {
      refreshAcessToken();
    } else if (results.length == 0) {
      res.status(204).json({ error: null, response: results });
    } else {
      res.status(200).json({ error: null, response: results });
    }
    //console.log(JSON.parse(response.body)[0]);
  });

});



module.exports = router;
