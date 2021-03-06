var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bat = new Schema({
	model: String,
	brand: String,
	len: String,
	barrel_size: String,
	weight: String,
	created_at: {type: Date, default: Date.now},
	price: String,
	year: String
});

module.exports = mongoose.model('Bat', Bat);