const express = require("express");
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const connectionDetails = require('./config/mysql-connection');
const moloniRouter = require('./backend/moloni.js');
const hubspotRouter = require('./backend/hubspot.js');
const jasminRouter = require('./backend/jasmin.js');
const matrixRouter = require('./backend/matrix.js');
const bd = require('./backend/bd.js');
const passport = require('./config/passport');
var nodemailer = require('nodemailer');


var app = express();
const hostname = '127.0.0.1';
const port = 8080;

global.connection = mysql.createConnection({
    host: connectionDetails.host,
    port: connectionDetails.port,
    user: connectionDetails.user,
    password: connectionDetails.password,
    database: connectionDetails.database
});

global.connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected to MySQL...');
});



app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use('/moloni/', moloniRouter);
app.use('/hubspot/' , hubspotRouter);
app.use('/jasmin/' , jasminRouter);
app.use('/matrix/' , matrixRouter);
app.use('/bd/' , bd);
passport.applyTo(app);



app.use(express.static(path.join(__dirname, 'views', 'vegefoods')));

// app.get("/contact", function(req, res){
//     res.sendFile(path.join(__dirname, 'views', 'vegefoods', 'registarClientes.html'));
// });

app.get("/encomendas", function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'vegefoods', 'encomendasAdmin.html'));
});

app.get("/teste", function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'vegefoods', 'about.1.html'));
});

app.get("/shop", function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'vegefoods', 'shop.html'));
});

app.get("/registo", function(req, res){
    res.sendFile(path.join(__dirname, 'views', 'vegefoods', 'registarClientes.html'));
});


app.listen(port, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.post('/sendFatura', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'isifood20@gmail.com',
        pass: 'miegsi2020'
    }
    });

    var mailOptions = {
        from: 'isifood20@gmail.com',
        to: 'jpedrommelo@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

module.exports = app;