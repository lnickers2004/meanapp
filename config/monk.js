var config = require('./config'),
	monk = require('monk');

module.exports = function() {
	var db = monk(config.db);
	return db;
};