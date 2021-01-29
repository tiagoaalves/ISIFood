//funcao executada quando a página é carregada com o objetivo de ir buscar as tokens à bd
//fetch('/hubspot/getTokens');

//getJasminSales();
//getTokens();
//getHubspotTokens();
//setTokens();



function setTokens() {
  fetch('/moloni/setTokens').then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function getTokens() {
  const url = '/moloni/getTokens';
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function refreshToken() {
  const url = '/moloni/refreshToken';
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function getEmpresas() {
  const url = '/moloni/getEmpresas';
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function getCategorias() {
  const url = '/moloni/getCategorias';
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}


function getJasminToken() {
  const url = '/jasmin/getToken';
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.url);
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function getJasminProducts() {
  console.log('prods')
  const url = '/jasmin/getProducts';
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    mode:'cors'
  }).then(response => response.json())
  .then(data => console.log(data.response))
  .catch(function(err) {
    console.error(err);
  });
}


// function getJasminProductById() {
//   const url = '/hubspot/getContacts';
//   fetch(url, {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'GET'
//   }).then(function(response) {
//     if (!response.ok) {
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.headers);
//       console.log(response.url);
//       console.log(response.status);
//     }
//     else {
//       console.log(response);
//     }
//   }).then(function(result) {
//     console.log(result);
//   }).catch(function(err) {
//     alert("Submission error");
//     console.error(err);
//   });
// }

function getJasminProductById() {
  const url = '/hubspot/hubspotUpdateCliente';
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function stockChange(id, qt) {
  var id = id;
  var qt = qt;
  const url = `/jasmin/stockChange/${id}/${qt}`;
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.url);
      console.log(response.status);
    }
    else {
      console.log('tudo ok');
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}
function sendFatura() {
  const url= '/sendFatura';
  fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}
