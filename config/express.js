var express = require('express');
var uri = 'mongodb://localhost/todos';
var db = require('mongoose').connect(uri);

module.exports = function() {
    var app = express();
    app.set('views', './app/views');
	app.set('view engine', 'ejs');
	app.use(express.static('./public'));
    require('../app/routes/index.server.routes.js')(app);
    return app;
};