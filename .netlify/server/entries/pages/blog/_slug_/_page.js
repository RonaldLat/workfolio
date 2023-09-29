const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/dark-mode.md": () => import("../../../../chunks/dark-mode.js").then((n) => n._), "../../../posts/demystifying-binary--search.md": () => import("../../../../chunks/demystifying-binary--search.js").then((n) => n._), "../../../posts/hello-world.md": () => import("../../../../chunks/hello-world.js").then((n) => n._), "../../../posts/post1.md": () => import("../../../../chunks/post1.js").then((n) => n._), "../../../posts/post2.md": () => import("../../../../chunks/post2.js").then((n) => n._) }), `../../../posts/${params.slug}.md`);
    console.log(post.default);
    console.log(post.metadata);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    console.log(e, `Could not find${params.slug}`);
  }
}
export {
  load
};
