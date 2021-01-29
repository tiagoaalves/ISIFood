console.log('hey');

function registar() {
  validateNome();
  validateEmail();
  validateMorada();
  validatePassword();
  validateRepetir();
  validateTelemovel();
  validateRepetir();
  var nome = document.getElementById("divNome").innerHTML;
  var email = document.getElementById("divEmail").innerHTML;
  var morada = document.getElementById("divMorada").innerHTML;
  var telemovel = document.getElementById("telemovel").innerHTML;
  var password = document.getElementById("divPassword").innerHTML;
  var confirmPassword = document.getElementById("divRepetir").innerHTML;
  //var key = {socio, nome, email, idade, morada, password, confirmPassword};
  //console.log(key);
  if (nome == email) {
    if (email == morada) {
      if (morada == password) {
        if (password == confirmPassword) {
          if (confirmPassword == telemovel) {
            if (telemovel == '') {
              saveUser();
              saveUserHubspot();
            }
          }
          else {
            alert("Erros no preenchimento do formulário!");
          }
        }
        else {
          alert("Erros no preenchimento do formulário!");
        }
      }
      else {
        alert("Erros no preenchimento do formulário!");
      }
    }
    else {
      alert("Erros no preenchimento do formulário!");
    }
  }
  else {
    alert("Erros no preenchimento do formulário!");
  }
}

function saveUser() {
  let url = "/bd/registar";
  var data = {};
  // data.id_utilizador = document.getElementById("swal-input1").value,
  // data.nome = document.getElementById("nome").value,
  // data.morada = document.getElementById("swal-in").value,
  // data.telemovel= document.getElementById('telemovel'.value);
  data.password = document.getElementById("password").value,
    data.email = document.getElementById("email").value,
    //   data.cargo = 'Administrador';
    console.log(data); //debugging para ver os dados que foram enviados
  //chamada fetch para envio dos dados para o servior via POST
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      if (response.status === 409) {
        //swal({ title: "Conflito de dados de entrada!", type: "error" });
      }
      else {
        //swal({ title: 'Ocorreu em erro!', type: "error" });
      }
    }
    else { //limpeza dos dados do form
      // swal({ title: "Administrador registado com sucesso!", type: "success" });
      // listAdmins();
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function saveUserHubspot() {
  let url = "/hubspot/hubspotRegistarCliente";
  var data = {};
  data.nome = document.getElementById("nome").value,
    data.morada = document.getElementById("morada").value,
    data.telemovel = document.getElementById('telemovel').value;
    data.email = document.getElementById("email").value,
    //   data.cargo = 'Administrador';
    console.log(data); //debugging para ver os dados que foram enviados
  //chamada fetch para envio dos dados para o servior via POST
  fetch(url, {
    //headers: {"Content-Type": "application/x-www-form-urlencoded"},
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function(response) {
    if (!response.ok) {
      console.log(response.status); //=> number 100–599
      console.log(response.statusText); //=> String
      console.log(response.headers); //=> Headers
      console.log(response.url); //=> String
      if (response.status === 409) {
        //swal({ title: "Conflito de dados de entrada!", type: "error" });
      }
      else {
        //swal({ title: 'Ocorreu em erro!', type: "error" });
      }
    }
    else { //limpeza dos dados do form
      // swal({ title: "Administrador registado com sucesso!", type: "success" });
      // listAdmins();
    }
  }).then(function(result) {
    console.log(result);
  }).catch(function(err) {
    alert("Submission error");
    console.error(err);
  });
}

function validateNome() {
  if (document.getElementById("nome").value.length < 1) {
    document.getElementById("divNome").innerHTML = '<h6>Este campo é obrigatório</h6>';
  }
  document.getElementById("nome").onkeyup = function see() {
    if (document.getElementById("nome").value.length == 0) {
      document.getElementById("divNome").innerHTML = '<h6>Este campo é obrigatório</h6>';
    }
    else {
      document.getElementById("divNome").innerHTML = "";
    }
  };
}

function validateEmail() {
  if (document.getElementById("email").value.length < 1) {
    document.getElementById("divEmail").innerHTML = '<h6>Este campo é obrigatório</h6>';
  }
  document.getElementById("email").onkeyup = function see() {
    if (document.getElementById("email").value.length == 0) {
      document.getElementById("divEmail").innerHTML = '<h6>Este campo é obrigatório</h6>';
    }
    else {
      document.getElementById("divEmail").innerHTML = "";
    }
  };
}

function validateMorada() {
  if (document.getElementById("morada").value.length < 1) {
    document.getElementById("divMorada").innerHTML = '<h6>Este campo é obrigatório</h6>';
  }
  document.getElementById("morada").onkeyup = function see() {
    if (document.getElementById("morada").value.length == 0) {
      document.getElementById("divMorada").innerHTML = '<h6>Este campo é obrigatório</h6>';
    }
    else {
      document.getElementById("divMorada").innerHTML = "";
    }
  };
}

function validateTelemovel() {
  if (document.getElementById("telemovel").value.length !== 9) {
    document.getElementById("divTelemovel").innerHTML = '<h6>Insira um número de telemóvel válido</h6>';
  }
  document.getElementById("telemovel").onkeyup = function see() {
    if (document.getElementById("telemovel").value.length !== 9) {
      document.getElementById("divTelemovel").innerHTML = '<h6>Insira um número de telemóvel válido</h6>';
    }
    else {
      document.getElementById("divTelemovel").innerHTML = "";
    }
  };
}

function validatePassword() {
  if (document.getElementById("password").value.length == 0) {
    document.getElementById("divPassword").innerHTML = '<h6>Este campo é obrigatório</h6>';
  }
  document.getElementById("password").onkeyup = function see() {
    if (document.getElementById("password").value.length == 0) {
      document.getElementById("divPassword").innerHTML = '<h6>Este campo é obrigatório</h6>';
    }
    else if (document.getElementById("password").value.length < 6 && document.getElementById("password").value.length >= 1) {
      document.getElementById("divPassword").innerHTML = '<h6>A password tem que conter 6 caracteres no mínimo!</h6>';
    }
    else {
      document.getElementById("divPassword").innerHTML = "";
    }
  };
}

function validateRepetir() {
  if (document.getElementById("repetir").value.length == 0) {
    document.getElementById("divRepetir").innerHTML = '<h6>Este campo é obrigatório</h6>';
  }
  if (document.getElementById("password").value !== document.getElementById("repetir").value) {
    document.getElementById("divRepetir").innerHTML = '<h6>As passwords têm que coincidir!</h6>';
  }
  else {
    document.getElementById("divRepetir").innerHTML = "";
  }
}
