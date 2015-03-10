exports.render = function(req, res) {
    /*res.render('index', {
    	title: 'MEAN MVC'
    });*/
	// res.send('This is a get request.');
	res.render('index', {
        title: 'Howdy World'
    });
};