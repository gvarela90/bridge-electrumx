const express = require('express');
const jayson = require('jayson');

const app = express();
const port = 3000;

app.use(express.json());

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.post('/', function (req, res) {
 const { host, port, method, params } = req.body;
 jayson.Client
   .tcp({ host, port })
   .request(method, params, function (err, response) {
     res.send(response);
   });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));