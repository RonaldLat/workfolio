import { c as create_ssr_component, v as validate_component } from './ssr.js';
import { Q as QuickSort } from './QuickSort.js';
const metadata = {
  title: 'Understanding Sorting Algorithims in Javascript',
  author: 'Ronald',
  date: '2023-09-29T00:00:00.000Z',
  layout: 'blog',
  published: true,
  excerpt:
    "Quick Sort is a popular and efficient divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively."
};
const Understanding_sorting_algorithms_quick_sort = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    return `<h1 id="understanding-sorting-algorithms-in-javascript" data-svelte-h="svelte-136dbv8">Understanding Sorting Algorithms in JavaScript</h1> <p data-svelte-h="svelte-1q6w6dx">Sorting is a fundamental operation in computer science and is often required to organize data efficiently. There are several sorting algorithms available, each with its unique characteristics. In this article, we’ll explore the Quick Sort algorithm in JavaScript and compare it with other sorting algorithms.</p> <h2 id="quick-sort-algorithm" data-svelte-h="svelte-zu7o90">Quick Sort Algorithm</h2> <p data-svelte-h="svelte-m10uun">Quick Sort is a popular and efficient divide-and-conquer sorting algorithm. It works by selecting a ‘pivot’ element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.</p> <p data-svelte-h="svelte-1royc7m">Here’s a JavaScript implementation of Quick Sort:</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">quickSort</span><span style="color: #F8F8F2">(</span><span style="color: #FD971F; font-style: italic">arr</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (arr.length </span><span style="color: #F92672">&lt;=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> arr;</span></span>
<span class="line"><span style="color: #F8F8F2">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> pivot </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> arr[</span><span style="color: #AE81FF">0</span><span style="color: #F8F8F2">];</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> left </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [];</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">const</span><span style="color: #F8F8F2"> right </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">for</span><span style="color: #F8F8F2"> (</span><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> i </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> </span><span style="color: #AE81FF">1</span><span style="color: #F8F8F2">; i </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2"> arr.length; i</span><span style="color: #F92672">++</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (arr[i] </span><span style="color: #F92672">&lt;</span><span style="color: #F8F8F2"> pivot) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">      left.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(arr[i]);</span></span>
<span class="line"><span style="color: #F8F8F2">    &#125; </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">      right.</span><span style="color: #A6E22E">push</span><span style="color: #F8F8F2">(arr[i]);</span></span>
<span class="line"><span style="color: #F8F8F2">    &#125;</span></span>
<span class="line"><span style="color: #F8F8F2">  &#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">return</span><span style="color: #F8F8F2"> [</span><span style="color: #F92672">...</span><span style="color: #A6E22E">quickSort</span><span style="color: #F8F8F2">(left), pivot, </span><span style="color: #F92672">...</span><span style="color: #A6E22E">quickSort</span><span style="color: #F8F8F2">(right)];</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> ${validate_component(
      QuickSort,
      'QuickSort'
    ).$$render(
      $$result,
      {},
      {},
      {}
    )} <h2 id="comparing-quick-sort-with-other-sorting-algorithms" data-svelte-h="svelte-15234re">Comparing Quick Sort with Other Sorting Algorithms</h2> <h3 id="bubble-sort" data-svelte-h="svelte-4l4x35">Bubble Sort</h3> <p data-svelte-h="svelte-14lgh6e">Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It has a time complexity of O(n^2), making it inefficient for large datasets.</p> <h3 id="insertion-sort" data-svelte-h="svelte-1glxrbz">Insertion Sort</h3> <p data-svelte-h="svelte-1qo700a">Insertion Sort builds the final sorted array one item at a time. It has an average time complexity of O(n^2) but performs well for small datasets and partially sorted data.</p> <h3 id="merge-sort" data-svelte-h="svelte-1u5n263">Merge Sort</h3> <p data-svelte-h="svelte-fm4d3z">Merge Sort is another divide-and-conquer algorithm. It divides the array into two halves, recursively sorts them, and then merges the sorted halves. It has a time complexity of O(n log n) and is stable.</p> <h3 id="quick-sort-vs-other-algorithms" data-svelte-h="svelte-h0kibe">Quick Sort vs. Other Algorithms</h3> <ul data-svelte-h="svelte-108z697"><li><p><strong>Efficiency</strong>: Quick Sort is generally faster than Bubble Sort and Insertion Sort for large datasets due to its average-case time complexity of O(n log n).</p></li> <li><p><strong>Space Complexity</strong>: Quick Sort has a space complexity of O(log n) for the recursive call stack, which is more memory-efficient than Merge Sort’s O(n).</p></li> <li><p><strong>Stability</strong>: Quick Sort is not a stable sort, meaning it may change the relative order of equal elements. Merge Sort, on the other hand, is stable.</p></li> <li><p><strong>Ease of Implementation</strong>: Bubble Sort and Insertion Sort are simpler to implement than Quick Sort, which involves partitioning.</p></li></ul> <p data-svelte-h="svelte-1cxwqo6">In conclusion, Quick Sort is a versatile and efficient sorting algorithm in JavaScript, especially for large datasets. However, it’s essential to consider the specific requirements of your task and the characteristics of your data when choosing a sorting algorithm. Other algorithms like Bubble Sort, Insertion Sort, and Merge Sort have their advantages and may be more suitable in different situations.</p>`;
  }
);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Understanding_sorting_algorithms_quick_sort,
      metadata
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
export { __vite_glob_0_9 as _ };
