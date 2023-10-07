import { _ as __vite_glob_0_0 } from '../../../../chunks/concatenation of array.js';
import { _ as __vite_glob_0_1 } from '../../../../chunks/dark-mode.js';
import { _ as __vite_glob_0_2 } from '../../../../chunks/demystifying-binary--search.js';
import { _ as __vite_glob_0_3 } from '../../../../chunks/hello-world.js';
import { _ as __vite_glob_0_4 } from '../../../../chunks/post1.js';
import { _ as __vite_glob_0_5 } from '../../../../chunks/python tricks for writing better code.js';
import { _ as __vite_glob_0_6 } from '../../../../chunks/template.js';
import { _ as __vite_glob_0_7 } from '../../../../chunks/understanding-sorting-algorithms-quick-sort.js';
import { j as json } from '../../../../chunks/index.js';
async function getPosts() {
<<<<<<< HEAD
	let posts = [];
	const paths = /* @__PURE__ */ Object.assign({
		'/src/posts/concatenation of array.md': __vite_glob_0_0,
		'/src/posts/dark-mode.md': __vite_glob_0_1,
		'/src/posts/demystifying-binary--search.md': __vite_glob_0_2,
		'/src/posts/hello-world.md': __vite_glob_0_3,
		'/src/posts/post1.md': __vite_glob_0_4,
		'/src/posts/python tricks for writing better code.md': __vite_glob_0_5,
		'/src/posts/template.md': __vite_glob_0_6,
		'/src/posts/understanding-sorting-algorithms-quick-sort.md': __vite_glob_0_7
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
=======
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
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime()
  );
  return posts;
>>>>>>> gsap
}
async function GET() {
  const posts = await getPosts();
  return json(posts);
}
export { GET };
