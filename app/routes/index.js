exports = module.exports = function(router, Bat) {

	router.get('/', function(req, res){
		res.render('index');
	});

	router.route('/batData')
		.get(function(req, res) {
			Bat.find(function(err, members) {
				if (err)
					res.send(err);
				res.json(members);
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
				bat.save(function(err) {
					if (err)
						res.send(err);
					res.json({ message: 'Bat Created!'});
				}); 
			});
}
