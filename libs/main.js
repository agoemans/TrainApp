module.exports = function(app, express, path)
{
	var sampleJSON = {locations:['Rotterdam', 'Amsterdam']};
	
	console.log(__dirname);
	app.get('/',function(req,res){
	  app.use(express.static(__dirname + '/public'));
	});

	/* GET Hello World page. */
	app.get('/helloworld', function(req, res) {
		res.json(sampleJSON.locations);
	});

		/* Search */
	app.get('/api/trein', function(req, res) {
		var getJSON = require('./twitterwriteresult.js');
		getJSON(req,res);
	});

	/* Test DB connection -- to be used*/
	app.get('/dbtest', function(req, res) {
		var textCleanUp = require('./texthelper.js');
		//res.send(textCleanUp.fixDate());
		res.send(textCleanUp.sliceLocation());
	});

}