export async function load({ fetch }) {
	const res = await fetch('/api/products?category=jeep');
	const products = await res.json();
	console.log('products', products);
	return {
		products
	};
}

