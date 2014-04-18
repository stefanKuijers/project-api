'use strict';

var restify = require('restify');

var server = restify.createServer({
  name: 'project-api'
});

server.use(restify.bodyParser());
server.use(restify.queryParser());

server.get('/get', get_from);         // curl -i http://localhost:8888/get
server.post('/create', insert_into); 
server.put('/update', update_at);    
server.del('/delete', delete_from);  

server.listen(8888, function() {
  console.log('%s listening at %s', server.name, server.url);
});

function callback (err, result) {
  return err ? res.send(err) : res.json(result);
}

function get_from(req, res) {
  console.log("get_from");
}

function insert_into(req, res) {
  console.log("insert_into");
}

function update_at(req, res) {
   console.log("update_at");
}

function delete_from(req, res) {
   console.log("delete_from");
}

console.log("server.js ran");