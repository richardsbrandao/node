const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {type: String, require: true},
	subjects: {type: Array, require: true}
}, {collection: 'categories'});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;