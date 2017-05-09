module.exports = {
	validate: (category) => {
		if( ! category.name ) {
			throw { message: 'Category name cannot be null', status: 422 };
		}

		if( ! category.subjects ) {
			throw { message: 'Category subjects cannot be null', status: 422 };
		}
		
		if( category.subjects && category.subjects.length === 0 ) {
			throw { message: 'Category subjects cannot be empty', status: 422 };
		}
	}
};