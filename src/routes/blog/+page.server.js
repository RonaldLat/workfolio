
	// src/routes/+page.server.ts
    import { posts } from '$lib/server/posts';

    export const load= async () => {
        return {
            posts, // make posts available on the client
        };
    };
