export const load = async ({ fetch }) => {
  let quote ={}
  try{
	const response = await fetch(`https://stoic-quotes.com/api/quote`);

  quote = await response.json();
  }catch(e){
    quote = null
    console.log('fetch error: ',e)
  }
console.log(quote)
	return {
		quote
	};
};
