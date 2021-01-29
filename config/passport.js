const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
var bcrypt = require('bcryptjs');
const saltRounds = 10;
var loggedUser = "";

const getUserData = function(email, callback) {
  var query = "";
  let sql = "SELECT * FROM users WHERE email=?";
  query = global.connection.query(sql, [email], function(error, rows, fields) {
    console.log(query.sql);
    if (error) throw error;
    if (rows.length > 0) {
      console.log("yay");
      callback(rows[0]);	
    }else{
      console.log("nay");
      callback(null);
    }		
  });	  
};

const checkCredentials = function(username, password, callback) {
  getUserData(username, function(data) {
    loggedUser = data.id;
    callback(data != null && data.password === password);
  });
};

const addLoginGETRoute = function(app) {
  app.get('/login', function(req, res) {
    if (req.isAuthenticated()) {
      if(req.user.type){
        res.redirect('/encomendas');
      }else{
        res.redirect('/shop');
      }
    }else{
      res.render('/');
      console.log("isAuthenticatednot");
    }
  });
};

const getIdRoute = function(app) {
  app.get('/id', function(req, res) {
    res.body = loggedUser;
  });
};

  function addLoginPOSTRoute(app) { 
  app.post('/', function(req, res) {
    let username = req.body.email;
    let password = req.body.password;
    let data = {username: username, password: password};
    console.log(data);
    let target = (req.query.t ? req.query.t : '/login');

    /*req.checkBody('username', 'Username should have between 5 and 10 chars').isLength({min: 5, max: 10});
    
    req.checkBody('password', 'Password should have between 8 and 15 chars').isLength({min: 8, max: 15});*/

    //let validationErrors = req.validationErrors();   

    /*if (validationErrors) {
      res.render('/', {
        errors: validationErrors,
        username: username
      });
      return;
    }*/

    checkCredentials(username, password, function(valid) {
      if (valid === true) {
        req.login(username, function(err) {
          console.log("login");
          console.log(target);
				  res.redirect(target);
				  console.log("AQUIIIIIIII" +loggedUser);
			  });		
      }else{
        console.log("try again");
        res.redirect('/');
        loggedUser = "";
      }
    });
  });
};

const addLogoutRoute = function(app) {
  app.get('/logout', function(req, res) {
    if (req.isAuthenticated()) {
      console.log("logout");
      loggedUser = "";
      req.logout();
      req.session.destroy();
    }
    res.redirect('/');
  });
};

const addSessions = function(app) {
  app.use(cookieParser());
  app.use(session({
	  secret: 'braguesa',
	  resave: false,
	  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
};

  const addUsersDataToViews = function(app) {
  app.get('/userDetails',function(request, response) {
    console.log('userDetails');
    var user = request.user;
    response.json(user);
  });
};

const authenticationdMiddleware = function(type, onFailure) {
  return function (req, res, next) {
    let hasAccess = req.isAuthenticated() && (type ? type === req.user.cargo : true);

    if (hasAccess) {
      next();
    }else{
      onFailure(res);
    }    
}};

const addSecureOptions = function() {  
  global.redirectIfNotLogged = function(type) {
    return function (req, res, next) {
      let hasAccess = req.isAuthenticated() && (type ? type === req.user.cargo : true);
      if (hasAccess) {
        next();
      }else{
        //res.redirect('/login?t=${req.originalUrl}');
        res.redirect('/');
      }    
    };  
  };
  global.forbidIfNotLoggedColab = function() {
    return function (req, res, next) {
      let hasAccess = req.isAuthenticated() && ("Colaborador"=== req.user.cargo);
      if (hasAccess) {
        next();
      }else{
       if(req.user.cargo == 'n'){
          res.redirect('/colabs');
        }else if(req.user.cargo == 'Associado'){
          res.redirect('/socio');
        }
      }    
    };  
  };
  
  global.forbidIfNotLoggedAssoci = function(type) {
    return function (req, res, next) {
      let errorMsg = `Access to ${req.originalUrl} was forbidden.`;
      let hasAccess = req.isAuthenticated() && (type ? type === req.user.cargo : true);
      if (hasAccess) {
        next();
      }else{
        if(req.user.cargo == 'Colaborador'){
          res.redirect('/colabs');
        }else if(req.user.cargo == 'Administrador'){
          res.redirect('/admins');
        }
      }
    };  
  };
  
  global.forbidIfNotLoggedAdmin = function(type) {
    return function (req, res, next) {
      let hasAccess = req.isAuthenticated() && ('Administrador' === req.user.cargo);
      if (hasAccess) {
        next();
      }else{
        if(req.user.cargo == 'Colaborador'){
          res.redirect('/colabs');
        }else if(req.user.cargo == 'Associado'){
          res.redirect('/socio');
        }
      }    
    };  
  };
}; 





module.exports = {  
  applyTo: function(app) {

    addSecureOptions();
    addSessions(app);
    addLoginGETRoute(app); 
    getIdRoute(app);
    addLoginPOSTRoute(app);
    addLogoutRoute(app);
    addUsersDataToViews(app);

    passport.serializeUser(function(username, callback) {
	    callback(null, username);
    });   

    passport.deserializeUser(function(username, callback) {  
      getUserData(username, function(data) {
        callback(null, data);
      });
    });  


  }  
};