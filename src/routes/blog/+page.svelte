    <script >

        export let data
        console.log(data)
    </script>

<h1 class="text-gray-800">Blog home page</h1>
    <div class="container">
        <h1>Ronald's Blog</h1>

        <ul class="flex flex-col gap-5">
            {#each data.posts as post}
            <li class="bg-gray-200">
                <a href={`blog/${post.slug}`}>
                <h1>{post.meta.title}</h1>
                <h1>{post.date}</h1>
                <h1>{post.excerpt}</h1>
                </a>
            </li>
            <hr/>
            {/each}
        </ul>
    </div>

