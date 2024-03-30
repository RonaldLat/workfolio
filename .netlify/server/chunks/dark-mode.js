import { c as create_ssr_component } from './ssr.js';
const metadata = {
  title: 'How To Build Offline DarkMode On Your Website',
  description:
    'Using localStorage to add dark mode to any website in simple steps',
  img: 'dark-website.webp',
  alt: 'screenshot of dark-themed website',
  author: 'Ron',
  date: '2023-09-15T00:00:00.000Z',
  published: true,
  layout: 'blog',
  tags: ['css', 'javascript']
};
const Dark_mode = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    return `<p data-svelte-h="svelte-xy4nw1">Dark mode and offline web development patterns have been on the rise lately. But why?
I will give one simple answer. Accessibility.
If you want to satistfy your customers of the your top concern should be on how they access your website. If you improve their experience when they are on your website they will be happier. Happy customers keep coming back and this means more profit for your business.</p> <p data-svelte-h="svelte-q9hn5s">You might wonder what dark mode and offline has to with making customers happier.
Not everyone uses their phone under bright enviroment. And internet is expensive in some countries so some of your customers might save your website for offline viewing later on. I hope you get the point.
Let’s get started with adding this offline dark mode to your website.offline</p> <h3 id="why-use-localstorage" data-svelte-h="svelte-18t5hf5">Why use localStorage?</h3> <p data-svelte-h="svelte-7pckmc">LocalStorage is simply a database that resides inside the web browser. It allows us to store and retrieve data on the clients machine for later use even without internet connection.
We could have used cookies or caches to store the state of users preference (dark or light mode) but we will go with localStorage.
LocalStorage is prefered because it has several advantages over the other storage options in this use case.</p> <h3 id="advantages-of-localstorage" data-svelte-h="svelte-1x5gxz2">Advantages of localStorage</h3> <ol data-svelte-h="svelte-10nsdm0"><li>Free database that come with all browsers. No installation or hosting fee headaches.</li> <li>No expiration. Data remains in the database as long as the browser lives, unless manually deleted.</li> <li>A whooping 5mb space. That is more than enough for most projects.</li> <li>Easy to use key-value pair system. It’s easy as it sounds.</li> <li>Client-based. No server overload or database queries. Everything works on the client’s machine.</li></ol> <h3 id="make-a-simple-website" data-svelte-h="svelte-909k6j">Make A Simple Website</h3> <p data-svelte-h="svelte-1v2lypq">We will need a website to add the dark mode to. So let’s get started with it.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">html</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;en&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">head</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">meta</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">charset</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;UTF-8&quot;</span><span style="color: #F8F8F2"> /&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">meta</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">name</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;viewport&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">content</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color: #F8F8F2"> /&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">title</span><span style="color: #F8F8F2">&gt;Document&lt;/</span><span style="color: #F92672">title</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">link</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">rel</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;stylesheet&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">href</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;style.css&quot;</span><span style="color: #F8F8F2"> /&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">head</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">body</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">main</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;darkMode Toggle&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">h1</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;heading&quot;</span><span style="color: #F8F8F2">&gt;welcome to dark mode&lt;/</span><span style="color: #F92672">h1</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #F92672">main</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">body</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">html</span><span style="color: #F8F8F2">&gt;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1uerefh">There is nothing special here. Just a simple site with button and heading elements wrapped inside a main tag.</p> <h3 id="create-and-link-css-file" data-svelte-h="svelte-1ha2nc8">Create and link CSS file</h3> <p data-svelte-h="svelte-7fq7y0">We will use css for styling and javascript for adding functionality.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F92672">body</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">max-width</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">width</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">height</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">vh</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"><span style="color: #F92672">main</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">width</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">height</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">display</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">flex</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">align-items</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">justify-content</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"><span style="color: #F92672">h1</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">text-transform</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">uppercase</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">button</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">position</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">absolute</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">top</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">10</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">right</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">10</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"><span style="color: #A6E22E">.darkMode</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">background-color</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">black</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">color</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">white</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1ynrmj3">Most of the styling rules are self-explanatory. The most import rules are in the <code>.darkMode</code> class.
In this class you will define how you want the dark mode version of your website to look. You will definetly make things more darker and in this case our background color is set to black and text is set to white. You can use any colors you prefer.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #A6E22E">.darkMode</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">background-color</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">black</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">color</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">white</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h3 id="create-and-link-javascript-file" data-svelte-h="svelte-pdjgva">Create and link Javascript file</h3> <p data-svelte-h="svelte-255v32">In javascript is where all the magic happens. On a click of a button the entire background of the website will be changed by applying the <code>.darkMode</code> class.
The chosen preference will also be saved on the users browser on a database called localStorage.
We will begin by defining a few variables.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> darkMode </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> localStorage.</span><span style="color: #A6E22E">getItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1ot85x8">Instantiate the name of the variable will use to save user’s selection in the localStorage.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> darkModeButton </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;button&#39;</span><span style="color: #F8F8F2">);</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-rc6jrg">Next we grab the button and store it in a variable so that we can easily refer to it.
I am using the <code>button</code> tag to grab it because it is the only button in the page. If you have more than one button use a class or id to refer to it.</p> <p data-svelte-h="svelte-148l6lx">The page will initially load on a light theme. But if the user had visited before and changed to dark mode we need to make it load on that setting. This ‘if’ statement will help us achieve that.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (darkMode </span><span style="color: #F92672">==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;enabled&#39;</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">enableDarkMode</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1i4nrvs">This statement will check the localStorage and read <code>darkMode</code>’s variable value. If it reads <code>&#39;enabled&#39;</code> it will call the function <code>enableDarkMode()</code> which will enable dark mode. Don’t worry about the function as we will define it in the next line.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">enableDarkMode</span><span style="color: #F8F8F2">() &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;main&#39;</span><span style="color: #F8F8F2">).classList.</span><span style="color: #A6E22E">add</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">  localStorage.</span><span style="color: #A6E22E">setItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;enabled&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-u29nxo">The first line of this function will grab the body element and add the css class <code>&#39;.darkMode&#39;</code> which simply applies the rules defined in the css file.</p> <p data-svelte-h="svelte-1i02yy5">The second line will update the value of <code>darkMode</code> to <code>&#39;enabled&#39;</code> in the localStorage. So that the chosen mode stays in memory in page reload or in case of internet loss.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">disableDarkMode</span><span style="color: #F8F8F2">() &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;main&#39;</span><span style="color: #F8F8F2">).classList.</span><span style="color: #A6E22E">remove</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">  localStorage.</span><span style="color: #A6E22E">setItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-bbgash">A function of disabling the dark mode is required in case the user wants a light theme later on. The above function does exactly that.
It achieves this by doing the direct opposite of what <code>enableDarkMode()</code> function does.
The first line grabs the body element and removes the ‘.darkMode’ class which is responsible for applying the dark mode.
The second line updates the localStorage and changes the value of <code>darkMode</code> to <code>null</code>. You can think of <code>null</code> is <code>disabled</code>, you might even use it if you prefer it.</p> <p data-svelte-h="svelte-vwekmc">All the variables and functions been defined. But how do will apply them?
That is where the button comes in. A user will click a button to toggle between the modes. On every click a function will be called which will implement the requested changes. An event listenter which will be listening for the ‘click’ event will be added to the button.</p> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">toggleButton.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  darkMode </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> localStorage.</span><span style="color: #A6E22E">getItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (darkMode </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;enabled&#39;</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">enableDarkMode</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  &#125; </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">disableDarkMode</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  &#125;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;);</span></span></code></pre>`}<!-- HTML_TAG_END --> <p data-svelte-h="svelte-1f0gerh">When the button is clicked, the value of <code>darkMode</code> will be read from the localStorage.
This value is what is going to determine which function is going to be called.
The ‘if’ statement states that if the value of <code>darkMode</code> is not <code>enabled</code>, the <code>enableDarkMode()</code> function will be called which in return will set the page to dark mode. Otherwise it will call the <code>disableDarkMode()</code> function will result to the page being set to the default them.
And that is how you enable dark to your website which works offline.</p> <h3 id="full-code" data-svelte-h="svelte-xqu46h">Full code</h3> <p data-svelte-h="svelte-b80oy5">Here are all the codes used in this project.</p> <h4 id="html" data-svelte-h="svelte-16amafa">HTML</h4> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F8F8F2">&lt;</span><span style="color: #F92672">html</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">lang</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;en&quot;</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">head</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">meta</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">charset</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;UTF-8&quot;</span><span style="color: #F8F8F2"> /&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">meta</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">name</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;viewport&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">content</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color: #F8F8F2"> /&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">title</span><span style="color: #F8F8F2">&gt;Document&lt;/</span><span style="color: #F92672">title</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">link</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">rel</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;stylesheet&quot;</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">href</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;style.css&quot;</span><span style="color: #F8F8F2"> /&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">head</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;</span><span style="color: #F92672">body</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">main</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;darkMode Toggle&lt;/</span><span style="color: #F92672">button</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">      &lt;</span><span style="color: #F92672">h1</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">class</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;heading&quot;</span><span style="color: #F8F8F2">&gt;welcome to dark mode&lt;/</span><span style="color: #F92672">h1</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">    &lt;/</span><span style="color: #F92672">main</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">    &lt;</span><span style="color: #F92672">script</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">src</span><span style="color: #F8F8F2">=</span><span style="color: #E6DB74">&quot;app.js&quot;</span><span style="color: #F8F8F2">&gt;&lt;/</span><span style="color: #F92672">script</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">  &lt;/</span><span style="color: #F92672">body</span><span style="color: #F8F8F2">&gt;</span></span>
<span class="line"><span style="color: #F8F8F2">&lt;/</span><span style="color: #F92672">html</span><span style="color: #F8F8F2">&gt;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h4 id="css" data-svelte-h="svelte-dvvc3g">CSS</h4> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #F92672">body</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">max-width</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">width</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">height</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">vh</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"><span style="color: #F92672">main</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">width</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">height</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">100</span><span style="color: #F92672">%</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">display</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">flex</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">align-items</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">justify-content</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">center</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"><span style="color: #F92672">h1</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">text-transform</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">uppercase</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">button</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">position</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">absolute</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">top</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">10</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">right</span><span style="color: #F8F8F2">: </span><span style="color: #AE81FF">10</span><span style="color: #F92672">px</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"><span style="color: #A6E22E">.darkMode</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">background-color</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">black</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #66D9EF; font-style: italic">color</span><span style="color: #F8F8F2">: </span><span style="color: #66D9EF">white</span><span style="color: #F8F8F2">;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END --> <h4 id="javascript" data-svelte-h="svelte-1o0w5w2">Javascript</h4> <!-- HTML_TAG_START -->${`<pre class="shiki monokai" style="background-color: #272822" tabindex="0"><code><span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> darkMode </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> localStorage.</span><span style="color: #A6E22E">getItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">let</span><span style="color: #F8F8F2"> toggleButton </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;button&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (darkMode </span><span style="color: #F92672">==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;enabled&#39;</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #A6E22E">enableDarkMode</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">enableDarkMode</span><span style="color: #F8F8F2">() &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;main&#39;</span><span style="color: #F8F8F2">).classList.</span><span style="color: #A6E22E">add</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">  localStorage.</span><span style="color: #A6E22E">setItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #E6DB74">&#39;enabled&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #66D9EF; font-style: italic">function</span><span style="color: #F8F8F2"> </span><span style="color: #A6E22E">disableDarkMode</span><span style="color: #F8F8F2">() &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  document.</span><span style="color: #A6E22E">querySelector</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;main&#39;</span><span style="color: #F8F8F2">).classList.</span><span style="color: #A6E22E">remove</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">  localStorage.</span><span style="color: #A6E22E">setItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">, </span><span style="color: #AE81FF">null</span><span style="color: #F8F8F2">);</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">toggleButton.</span><span style="color: #A6E22E">addEventListener</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;click&#39;</span><span style="color: #F8F8F2">, () </span><span style="color: #66D9EF; font-style: italic">=&gt;</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">  darkMode </span><span style="color: #F92672">=</span><span style="color: #F8F8F2"> localStorage.</span><span style="color: #A6E22E">getItem</span><span style="color: #F8F8F2">(</span><span style="color: #E6DB74">&#39;darkMode&#39;</span><span style="color: #F8F8F2">);</span></span>
<span class="line"></span>
<span class="line"><span style="color: #F8F8F2">  </span><span style="color: #F92672">if</span><span style="color: #F8F8F2"> (darkMode </span><span style="color: #F92672">!==</span><span style="color: #F8F8F2"> </span><span style="color: #E6DB74">&#39;enabled&#39;</span><span style="color: #F8F8F2">) &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">enableDarkMode</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  &#125; </span><span style="color: #F92672">else</span><span style="color: #F8F8F2"> &#123;</span></span>
<span class="line"><span style="color: #F8F8F2">    </span><span style="color: #A6E22E">disableDarkMode</span><span style="color: #F8F8F2">();</span></span>
<span class="line"><span style="color: #F8F8F2">  &#125;</span></span>
<span class="line"><span style="color: #F8F8F2">&#125;);</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
  }
);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: Dark_mode,
      metadata
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
export { __vite_glob_0_2 as _ };
