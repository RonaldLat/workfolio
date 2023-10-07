const load = async ({ fetch }) => {
	const response = await fetch(`https://stoic-quotes.com/api/quote`);
	const quote = await response.json();
	return {
		quote
	};
};
export { load };
