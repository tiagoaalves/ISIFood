const request = require('request');
const express = require('express');
const router = express.Router();


router.post ('/google_cliente'), function (req, res) {
 
 
console.log(req.body);

var destino = req.body.destino; 

var options = {
  'method': 'POST',
  'url': 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=41.537015, -8.403035&destinations='+ destino + "&mode=driving&units=metric&departure_time=now&key=AIzaSyA6vEyR7v7bIP5iLOAsqMKYKA-X1ofYLKg",
  'headers': {
       'content-type': 'application/json'
  }
};
request(options, function(error, response, body) { 
    if (error) throw new Error(error);          
    console.log(response.body.rows[0].elements); 
                  
    var distancematrix = (response.body.rows[0].elements); 
    console.log(distancematrix);            
    res.end(JSON.stringify(distancematrix)); 
          
    }); 
};

module.exports = router;