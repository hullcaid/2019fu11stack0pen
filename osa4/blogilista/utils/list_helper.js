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


module.exports = {
	dummy, totalLikes
};