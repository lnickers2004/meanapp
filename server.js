process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = 1337;

var config = require('./config/config'),
	monk = require('./config/monk');
var express = require('./config/express');

var db = monk(),
	app = express();
app.listen(config.port);
module.exports = app;
console.log('Server running at http://localhost:' + config.port);