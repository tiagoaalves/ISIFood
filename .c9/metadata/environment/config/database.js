{"filter":false,"title":"database.js","tooltip":"/config/database.js","undoManager":{"mark":43,"position":43,"stack":[[{"start":{"row":0,"column":0},"end":{"row":33,"column":30},"action":"insert","lines":["const mysql = require('mysql');","","// Database Connection for Production","","// let config = {","//     user: process.env.SQL_USER,","//     database: process.env.SQL_DATABASE,","//     password: process.env.SQL_PASSWORD,","// }","","// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {","//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;","// }","","// let connection = mysql.createConnection(config);","","// Database Connection for Development","","let connection = mysql.createConnection({","  host: process.env.DB_HOST,","  user: process.env.DB_USER,","  database: process.env.DB_DATABASE,","  password: process.env.DB_PASS","});","","  connection.connect(function(err) {","    if (err) {","      console.error('Error connecting: ' + err.stack);","      return;","    }","    console.log('Connected as thread id: ' + connection.threadId);","  });","","  module.exports = connection;"],"id":1}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":27},"action":"remove","lines":["process.env.DB_HOST"],"id":6},{"start":{"row":19,"column":8},"end":{"row":19,"column":22},"action":"insert","lines":["146.148.34.216"]}],[{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["'"],"id":7}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["'"],"id":8}],[{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"remove","lines":["R"],"id":9},{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"remove","lines":["E"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"remove","lines":["S"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"remove","lines":["U"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"remove","lines":["_"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"remove","lines":["B"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"remove","lines":["D"]},{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"remove","lines":["."]},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"remove","lines":["v"]},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"remove","lines":["n"]},{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"remove","lines":["e"]},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"remove","lines":["."]},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"remove","lines":["s"]},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"remove","lines":["s"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"remove","lines":["e"]},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"remove","lines":["c"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"remove","lines":["o"]}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"remove","lines":["r"],"id":10},{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"remove","lines":["p"]}],[{"start":{"row":20,"column":8},"end":{"row":20,"column":14},"action":"insert","lines":["'root'"],"id":11}],[{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"remove","lines":["E"],"id":12},{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"remove","lines":["S"]},{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"remove","lines":["A"]},{"start":{"row":21,"column":31},"end":{"row":21,"column":32},"action":"remove","lines":["B"]},{"start":{"row":21,"column":30},"end":{"row":21,"column":31},"action":"remove","lines":["A"]},{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"remove","lines":["T"]},{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"remove","lines":["A"]},{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"remove","lines":["D"]},{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"remove","lines":["_"]},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"remove","lines":["B"]},{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"remove","lines":["D"]},{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"remove","lines":["."]},{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"remove","lines":["v"]},{"start":{"row":21,"column":21},"end":{"row":21,"column":22},"action":"remove","lines":["n"]},{"start":{"row":21,"column":20},"end":{"row":21,"column":21},"action":"remove","lines":["e"]},{"start":{"row":21,"column":19},"end":{"row":21,"column":20},"action":"remove","lines":["."]},{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"remove","lines":["s"]},{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"remove","lines":["s"]},{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"remove","lines":["e"]},{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"remove","lines":["c"]},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"remove","lines":["o"]},{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"remove","lines":["r"]},{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":["p"]}],[{"start":{"row":21,"column":12},"end":{"row":21,"column":14},"action":"insert","lines":["''"],"id":13}],[{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"insert","lines":["s"],"id":14},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"insert","lines":["c"]},{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"insert","lines":["h"]},{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"insert","lines":["e"]},{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["m"]},{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":["a"]}],[{"start":{"row":21,"column":13},"end":{"row":21,"column":19},"action":"remove","lines":["schema"],"id":15},{"start":{"row":21,"column":13},"end":{"row":21,"column":24},"action":"insert","lines":["schemadisto"]}],[{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"remove","lines":["S"],"id":16},{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"remove","lines":["S"]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"remove","lines":["A"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"remove","lines":["P"]},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"remove","lines":["_"]},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"remove","lines":["B"]},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"remove","lines":["D"]},{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"remove","lines":["."]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":["v"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"remove","lines":["n"]},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"remove","lines":["e"]},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["."]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":["s"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["s"]},{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"remove","lines":["e"]},{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"remove","lines":["c"]},{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"remove","lines":["o"]},{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"remove","lines":["r"]},{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"remove","lines":["p"]}],[{"start":{"row":22,"column":12},"end":{"row":22,"column":14},"action":"insert","lines":["''"],"id":17}],[{"start":{"row":22,"column":13},"end":{"row":22,"column":21},"action":"insert","lines":["xkcdd26p"],"id":18}],[{"start":{"row":0,"column":0},"end":{"row":33,"column":30},"action":"remove","lines":["const mysql = require('mysql');","","// Database Connection for Production","","// let config = {","//     user: process.env.SQL_USER,","//     database: process.env.SQL_DATABASE,","//     password: process.env.SQL_PASSWORD,","// }","","// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {","//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;","// }","","// let connection = mysql.createConnection(config);","","// Database Connection for Development","","let connection = mysql.createConnection({","  host: '146.148.34.216',","  user: 'root',","  database: 'schemadisto',","  password: 'xkcdd26p'","});","","  connection.connect(function(err) {","    if (err) {","      console.error('Error connecting: ' + err.stack);","      return;","    }","    console.log('Connected as thread id: ' + connection.threadId);","  });","","  module.exports = connection;"],"id":19},{"start":{"row":0,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["const mysql = require('mysql');","","// Database Connection for Production","","// let config = {","//     user: process.env.SQL_USER,","//     database: process.env.SQL_DATABASE,","//     password: process.env.SQL_PASSWORD,","// }","","// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {","//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;","// }","","// let connection = mysql.createConnection(config);","","// Database Connection for Development","","let connection = mysql.createConnection({","  host: process.env.DB_HOST,","  user: process.env.DB_USER,","  database: process.env.DB_DATABASE,","  password: process.env.DB_PASS","});","","  connection.connect(function(err) {","    if (err) {","      console.error('Error connecting: ' + err.stack);","      return;","    }","    console.log('Connected as thread id: ' + connection.threadId);","  });","","  module.exports = connection;",""]}],[{"start":{"row":23,"column":3},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":24,"column":0},"end":{"row":25,"column":0},"action":"insert","lines":["",""]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"insert","lines":["c"]},{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"insert","lines":["o"]},{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"insert","lines":["n"]},{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"insert","lines":["s"]},{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["o"]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["l"]},{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["e"]},{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":["."]},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["l"]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["o"]}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["g"],"id":21}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":13},"action":"insert","lines":["()"],"id":22}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["p"],"id":23},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["r"]},{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":["o"]}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":15},"action":"remove","lines":["pro"],"id":24},{"start":{"row":25,"column":12},"end":{"row":25,"column":19},"action":"insert","lines":["process"]}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["."],"id":25},{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"remove","lines":["e"],"id":26},{"start":{"row":25,"column":20},"end":{"row":25,"column":23},"action":"insert","lines":["env"]}],[{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["."],"id":27}],[{"start":{"row":25,"column":24},"end":{"row":25,"column":35},"action":"insert","lines":["DB_DATABASE"],"id":28}],[{"start":{"row":25,"column":36},"end":{"row":25,"column":37},"action":"insert","lines":[";"],"id":29}],[{"start":{"row":24,"column":0},"end":{"row":25,"column":37},"action":"remove","lines":["","console.log(process.env.DB_DATABASE);"],"id":30}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"insert","lines":[","],"id":31}],[{"start":{"row":22,"column":32},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":23,"column":0},"end":{"row":23,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":13},"action":"insert","lines":["socketPath:"],"id":33}],[{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":[" "],"id":34}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":64},"action":"insert","lines":["hypnotic-spider-272118:us-central1:isifoodinstance"],"id":35}],[{"start":{"row":23,"column":64},"end":{"row":23,"column":65},"action":"insert","lines":["'"],"id":36}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["'"],"id":37}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"insert","lines":["/"],"id":38},{"start":{"row":23,"column":3},"end":{"row":23,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"remove","lines":[","],"id":39}],[{"start":{"row":23,"column":3},"end":{"row":23,"column":4},"action":"remove","lines":["/"],"id":40}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"remove","lines":["/"],"id":41}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"insert","lines":[","],"id":42}],[{"start":{"row":23,"column":65},"end":{"row":23,"column":66},"action":"remove","lines":["'"],"id":44},{"start":{"row":23,"column":64},"end":{"row":23,"column":65},"action":"remove","lines":["e"]},{"start":{"row":23,"column":63},"end":{"row":23,"column":64},"action":"remove","lines":["c"]},{"start":{"row":23,"column":62},"end":{"row":23,"column":63},"action":"remove","lines":["n"]},{"start":{"row":23,"column":61},"end":{"row":23,"column":62},"action":"remove","lines":["a"]},{"start":{"row":23,"column":60},"end":{"row":23,"column":61},"action":"remove","lines":["t"]},{"start":{"row":23,"column":59},"end":{"row":23,"column":60},"action":"remove","lines":["s"]},{"start":{"row":23,"column":58},"end":{"row":23,"column":59},"action":"remove","lines":["n"]},{"start":{"row":23,"column":57},"end":{"row":23,"column":58},"action":"remove","lines":["i"]},{"start":{"row":23,"column":56},"end":{"row":23,"column":57},"action":"remove","lines":["d"]},{"start":{"row":23,"column":55},"end":{"row":23,"column":56},"action":"remove","lines":["o"]},{"start":{"row":23,"column":54},"end":{"row":23,"column":55},"action":"remove","lines":["o"]},{"start":{"row":23,"column":53},"end":{"row":23,"column":54},"action":"remove","lines":["f"]},{"start":{"row":23,"column":52},"end":{"row":23,"column":53},"action":"remove","lines":["i"]},{"start":{"row":23,"column":51},"end":{"row":23,"column":52},"action":"remove","lines":["s"]},{"start":{"row":23,"column":50},"end":{"row":23,"column":51},"action":"remove","lines":["i"]},{"start":{"row":23,"column":49},"end":{"row":23,"column":50},"action":"remove","lines":[":"]},{"start":{"row":23,"column":48},"end":{"row":23,"column":49},"action":"remove","lines":["1"]},{"start":{"row":23,"column":47},"end":{"row":23,"column":48},"action":"remove","lines":["l"]},{"start":{"row":23,"column":46},"end":{"row":23,"column":47},"action":"remove","lines":["a"]},{"start":{"row":23,"column":45},"end":{"row":23,"column":46},"action":"remove","lines":["r"]},{"start":{"row":23,"column":44},"end":{"row":23,"column":45},"action":"remove","lines":["t"]},{"start":{"row":23,"column":43},"end":{"row":23,"column":44},"action":"remove","lines":["n"]},{"start":{"row":23,"column":42},"end":{"row":23,"column":43},"action":"remove","lines":["e"]},{"start":{"row":23,"column":41},"end":{"row":23,"column":42},"action":"remove","lines":["c"]},{"start":{"row":23,"column":40},"end":{"row":23,"column":41},"action":"remove","lines":["-"]},{"start":{"row":23,"column":39},"end":{"row":23,"column":40},"action":"remove","lines":["s"]},{"start":{"row":23,"column":38},"end":{"row":23,"column":39},"action":"remove","lines":["u"]},{"start":{"row":23,"column":37},"end":{"row":23,"column":38},"action":"remove","lines":[":"]},{"start":{"row":23,"column":36},"end":{"row":23,"column":37},"action":"remove","lines":["8"]},{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"remove","lines":["1"]},{"start":{"row":23,"column":34},"end":{"row":23,"column":35},"action":"remove","lines":["1"]},{"start":{"row":23,"column":33},"end":{"row":23,"column":34},"action":"remove","lines":["2"]},{"start":{"row":23,"column":32},"end":{"row":23,"column":33},"action":"remove","lines":["7"]},{"start":{"row":23,"column":31},"end":{"row":23,"column":32},"action":"remove","lines":["2"]},{"start":{"row":23,"column":30},"end":{"row":23,"column":31},"action":"remove","lines":["-"]},{"start":{"row":23,"column":29},"end":{"row":23,"column":30},"action":"remove","lines":["r"]},{"start":{"row":23,"column":28},"end":{"row":23,"column":29},"action":"remove","lines":["e"]},{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"remove","lines":["d"]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"remove","lines":["i"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"remove","lines":["p"]},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"remove","lines":["s"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"remove","lines":["-"]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"remove","lines":["c"]},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"remove","lines":["i"]},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"remove","lines":["t"]},{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"remove","lines":["o"]}],[{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"remove","lines":["n"],"id":45},{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"remove","lines":["p"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"remove","lines":["y"]},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"remove","lines":["h"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"remove","lines":["'"]}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["p"],"id":46},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["r"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":["o"]},{"start":{"row":23,"column":17},"end":{"row":23,"column":18},"action":"insert","lines":["c"]},{"start":{"row":23,"column":18},"end":{"row":23,"column":19},"action":"insert","lines":["e"]},{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["s"]},{"start":{"row":23,"column":20},"end":{"row":23,"column":21},"action":"insert","lines":["s"]},{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["."]},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["n"],"id":47},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["v"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["."]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":27},"end":{"row":23,"column":28},"action":"insert","lines":["o"],"id":48}],[{"start":{"row":23,"column":26},"end":{"row":23,"column":28},"action":"remove","lines":["so"],"id":49},{"start":{"row":23,"column":26},"end":{"row":23,"column":36},"action":"insert","lines":["socketPath"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":36},"end":{"row":23,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1585228226068,"hash":"cedcef60be9f437ae618eb0e6e5a782d78ab4fb2"}