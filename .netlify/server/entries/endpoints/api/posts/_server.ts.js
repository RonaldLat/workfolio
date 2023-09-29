import { _ as __vite_glob_0_0 } from '../../../../chunks/dark-mode.js';
import { _ as __vite_glob_0_1 } from '../../../../chunks/demystifying-binary--search.js';
import { _ as __vite_glob_0_2 } from '../../../../chunks/hello-world.js';
import { _ as __vite_glob_0_3 } from '../../../../chunks/post1.js';
import { _ as __vite_glob_0_4 } from '../../../../chunks/post2.js';
import { j as json } from '../../../../chunks/index.js';
async function getPosts() {
	let posts = [];
	const paths = /* @__PURE__ */ Object.assign({
		'/src/posts/dark-mode.md': __vite_glob_0_0,
		'/src/posts/demystifying-binary--search.md': __vite_glob_0_1,
		'/src/posts/hello-world.md': __vite_glob_0_2,
		'/src/posts/post1.md': __vite_glob_0_3,
		'/src/posts/post2.md': __vite_glob_0_4
	});
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');
		const metadata = file.metadata;
		const post = { ...metadata, slug };
		post.published && posts.push(post);
	}
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
	return posts;
}
async function GET() {
	const posts = await getPosts();
	return json(posts);
}
export { GET };
