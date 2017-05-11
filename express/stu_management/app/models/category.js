const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {type: String, require: true},
	subjects: {type: Array, require: true}
}, {collection: 'categories'});
CategorySchema.plugin(mongoosePaginate);

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;