const dummy = (blogs) => {
	return(1);
};

/* const totalLikes = (blogs) => {
	//console.log(`received: ${blogs}`);
	const reducer = (sum, item) => {
		//console.log(`reduserin syöte: ${sum}, ${typeof(sum)}, ${item}, ${typeof(item)}` );
		const value = sum + item;
		//console.log(`välitulos: ${value}, ${typeof(value)}`);
		return value;
	};

	const total = blogs.length === 0
		? 0
		: blogs.reduce((sum, blog) => reducer(sum, blog.likes), 0);
	//console.log(`sum of likes: ${total}`);
	return total;
}; */

const totalLikes = (blogs) => {
	const total = blogs.length === 0
		? 0
		: blogs.reduce((sum, blog) => sum + blog.likes, 0);
	return total;
};

const favoriteBlog = (blogs) => {
	if (blogs.length === 0) {
		return [];
	}

	const blogToReturn = {
		'title': '',
		'author': 'String',
		'likes': 0,
	};

	blogs.forEach(blog => {
		if (blog.likes > blogToReturn.likes){
			blogToReturn.title = blog.title;
			blogToReturn.author = blog.author;
			blogToReturn.likes = blog.likes;
		}
	});
	return blogToReturn;
};

module.exports = {
	dummy, totalLikes, favoriteBlog
};