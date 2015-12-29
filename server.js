var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var Client = require('node-rest-client').Client; 

// API
var express = require('express');
var app = express();
client = new Client();
app.use(express.static(__dirname)); 		// set the static files location to dirname
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// api ---------------------------------------------------------------------
// get series
app.get('/api/series', function(req, res) { 

	url = "http://www.joynelson.com/cockpit/rest/api/galleries/get/Series?token=25a01fb2eb534c8830882257"
	http.get(url, function(resp){
		var body = '';

		resp.on('data', function(chunk){
		    body += chunk;
			});

		resp.on('end', function(){
			// other way of doing it
		    var cpResponse = JSON.parse(body);
		    res.send(cpResponse);
			});

		}).on('error', function(e){
		  	console.log("Got an error: ", e);
			});

	});

// get arts
app.get('/api/art', function(req, res) {

	url = "http://www.joynelson.com/cockpit/rest/api/galleries/get/Art?token=25a01fb2eb534c8830882257"
	http.get(url, function(resp){
		var body = '';

		resp.on('data', function(chunk){
		    body += chunk;
			});

		resp.on('end', function(){
			// parse and send in one line
		    res.send(JSON.parse(body));
			});

		}).on('error', function(e){
		  	console.log("Got an error: ", e);
			});
	});

// get about data
app.get('/api/about', function(req, res) {
	url = "http://www.joynelson.com/cockpit/rest/api/collections/get/about?token=25a01fb2eb534c8830882257"
	http.get(url, function(resp){
		var body = '';

		resp.on('data', function(chunk){
		    body += chunk;
			});

		resp.on('end', function(){
			// parse and send in one line
		    res.send(JSON.parse(body));
			});

		}).on('error', function(e){
		  	console.log("Got an error: ", e);
			});

});
// application -------------------------------------------------------------
app.get('*', function(req, res) {
	res.send('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080);
console.log("App listening on port " + 8080);