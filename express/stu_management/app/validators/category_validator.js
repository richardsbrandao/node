module.exports = {
	validate: (category) => {
		if( ! category.name ) {
			throw new Error('Category name cannot be null');
		}

		if( ! category.subjects ) {
			throw new Error('Category subjects cannot be null');
		}
		
		if( category.subjects && category.subjects.length == 0 ) {
			throw new Error('Category subjects cannot be empty');
		}
	}
}