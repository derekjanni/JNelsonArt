// PACKAGES
var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var Client = require('node-rest-client').Client; 
var nodemailer = require('nodemailer');

// MAIL CLIENT
var fs = require('fs')
var fname = 'passfile'
var pass = null
fs.readFile(fname, 'utf8', function(err, data) {
  if (err) throw err;
  pass = data
});


var transporter = nodemailer.createTransport({
    host: 'smtps.joynelson.com',
    port: 25,
    secure: true, // use SSL
    auth: {
        user: 'me@joynelson.com',
        pass: pass
    }
});

// API SETUP ---------------------------------------------------------------
var express = require('express');
var app = express();
client = new Client();
app.use(express.static(__dirname)); 		// set the static files location to dirname
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

// API ---------------------------------------------------------------------
// get series
app.get('/api/series', function(req, res) { 

	url = "http://cockpit.joynelson.com/admin/rest/api/galleries/get/Series?token=25a01fb2eb534c8830882257"
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

	url = "http://cockpit.joynelson.com/admin/rest/api/galleries/get/Art?token=25a01fb2eb534c8830882257"
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
	url = "http://cockpit.joynelson.com/admin/rest/api/collections/get/about?token=25a01fb2eb534c8830882257"
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

// send email via nodemailer
app.post('/api/contact', function(req, res) {
		data = req.body;
		console.log(data);
		transporter.sendMail({
		    to: data.email,
		    subject: data.subject,
		    text: data.message + "\n\n Message Via Your Website From:" + data.name
		});
		res.send();
});

// APPLICATION -------------------------------------------------------------

app.use('/js', express.static(__dirname + '/js'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/css', express.static(__dirname + '/css'));

app.get('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("App listening on port " + port);
