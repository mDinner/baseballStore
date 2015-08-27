exports = module.exports = function(router, Bat) {

	router.get('/', function(req, res){
		res.render('index');
	});

	router.get('/viewInventory', function(req, res){
		res.render('viewInventory');
	});

	router.get('/batCreateSuccess', function(req, res){
		res.render('batCreateSuccess');
	});

	router.get('/batDetails', function(req, res){
		res.render('batDetails');
	});

	router.route('/batData')
		.get(function(req, res) {
			Bat.find(function(err, bats) {
			if (err)
				res.send(err);
			res.json(bats);
		});	
	  }).post(function(req, res) {
			var bat = new Bat();
			bat.model = req.body.model;
			bat.brand = req.body.brand;
			bat.len = req.body.len;
			bat.barrel_size = req.body.barrel_size;
			bat.weight = req.body.weight;
			bat.created_at = req.body.created_at;
			bat.price = req.body.price;
			bat.year = req.body.year;

			bat.save(function(err) {
				if (err)
					res.send(err);
				res.render('batCreateSuccess');
			});
	  });

	  router.route('/batData/:bat_id')
	  .get(function(req, res){
	  	Bat.findById(req.params.bat_id, function(err, bat){
	  		if(err){
	  			res.send(err);
	  		}
	  		res.render('batDetails');
	  	});
	  });

}
