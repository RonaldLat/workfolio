import { c as create_ssr_component } from './ssr.js';
const metadata = {
	title: 'How To Build Offline DarkMode On Your Website',
	description: 'Using localStorage to add dark mode to any website in simple steps',
	img: 'dark-website.webp',
	alt: 'screenshot of dark-themed website',
	author: 'Ron',
	date: '2023-09-15T00:00:00.000Z',
	published: true,
	layout: 'blog',
	tags: ['css', 'javascript']
};
const Dark_mode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<p data-svelte-h="svelte-xy4nw1">Dark mode and offline web development patterns have been on the rise lately. But why?
I will give one simple answer. Accessibility.
If you want to satistfy your customers of the your top concern should be on how they access your website. If you improve their experience when they are on your website they will be happier. Happy customers keep coming back and this means more profit for your business.</p> <p data-svelte-h="svelte-q9hn5s">You might wonder what dark mode and offline has to with making customers happier.
Not everyone uses their phone under bright enviroment. And internet is expensive in some countries so some of your customers might save your website for offline viewing later on. I hope you get the point.
Let’s get started with adding this offline dark mode to your website.offline</p> <h3 data-svelte-h="svelte-1r4o6dq">Why use localStorage?</h3> <p data-svelte-h="svelte-7pckmc">LocalStorage is simply a database that resides inside the web browser. It allows us to store and retrieve data on the clients machine for later use even without internet connection.
We could have used cookies or caches to store the state of users preference (dark or light mode) but we will go with localStorage.
LocalStorage is prefered because it has several advantages over the other storage options in this use case.</p> <h3 data-svelte-h="svelte-12y5369">Advantages of localStorage</h3> <ol data-svelte-h="svelte-10nsdm0"><li>Free database that come with all browsers. No installation or hosting fee headaches.</li> <li>No expiration. Data remains in the database as long as the browser lives, unless manually deleted.</li> <li>A whooping 5mb space. That is more than enough for most projects.</li> <li>Easy to use key-value pair system. It’s easy as it sounds.</li> <li>Client-based. No server overload or database queries. Everything works on the client’s machine.</li></ol> <h3 data-svelte-h="svelte-1jqbe3m">Make A Simple Website</h3> <p data-svelte-h="svelte-1v2lypq">We will need a website to add the dark mode to. So let’s get started with it.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;html lang=&quot;en&quot;&gt;
   &lt;head&gt;
     &lt;meta charset=&quot;UTF-8&quot;&gt;
     &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
     &lt;title&gt;Document&lt;/title&gt;
     &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
   &lt;/head&gt;
   &lt;body&gt;
    &lt;main&gt;
      &lt;button&gt;darkMode Toggle&lt;/button&gt;
      &lt;h1 class=&quot;heading&quot;&gt;welcome to dark mode&lt;/h1&gt;
    &lt;/main&gt;
   &lt;/body&gt;
  &lt;/html&gt;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1uerefh">There is nothing special here. Just a simple site with button and heading elements wrapped inside a main tag.</p> <h3 data-svelte-h="svelte-1hil2ky">Create and link CSS file</h3> <p data-svelte-h="svelte-7fq7y0">We will use css for styling and javascript for adding functionality.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">body &#123;
  max-width: 100%;
  width: 100%;
  height: 100vh;
&#125;
main &#123;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
&#125;
h1 &#123;
  text-transform: uppercase;
&#125;

button &#123;
  position: absolute;
  top: 10px;
  right: 10px;
&#125;
.darkMode &#123;
  background-color: black;
  color: white;
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-4rx60j">Most of the styling rules are self-explanatory. The most import rules are in the <code>.darkMode</code> class.
In this class you will define how you want the dark mode version of your website to look. You will definetly make things more darker and in this case our background color is set to black and text is set to white. You can use any colors you prefer.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined"> .darkMode &#123;
    background-color: black;
    color: white;
  &#125;</code>`}<!-- HTML_TAG_END --></pre> <h3 data-svelte-h="svelte-1tinb4q">Create and link Javascript file</h3> <p data-svelte-h="svelte-9ccw0i">In javascript is where all the magic happens. On a click of a button the entire background of the website will be changed by applying the <code>.darkMode</code> class.
The chosen preference will also be saved on the users browser on a database called localStorage.
We will begin by defining a few variables.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">let darkMode = localStorage.getItem(&#39;darkMode&#39;)</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1ot85x8">Instantiate the name of the variable will use to save user’s selection in the localStorage.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">let darkModeButton = document.querySelector(&#39;button&#39;)</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-ksrefs">Next we grab the button and store it in a variable so that we can easily refer to it.
I am using the <code>button</code> tag to grab it because it is the only button in the page. If you have more than one button use a class or id to refer to it.</p> <p data-svelte-h="svelte-148l6lx">The page will initially load on a light theme. But if the user had visited before and changed to dark mode we need to make it load on that setting. This ‘if’ statement will help us achieve that.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">if (darkMode == &#39;enabled&#39;)&#123;
  enableDarkMode();
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1i4nrvs">This statement will check the localStorage and read <code>darkMode</code>’s variable value. If it reads <code>&#39;enabled&#39;</code> it will call the function <code>enableDarkMode()</code> which will enable dark mode. Don’t worry about the function as we will define it in the next line.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">function enableDarkMode() &#123;
  document.querySelector(&quot;main&quot;).classList.add(&quot;darkMode&quot;);
  localStorage.setItem(&quot;darkMode&quot;, &quot;enabled&quot;);
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-u29nxo">The first line of this function will grab the body element and add the css class <code>&#39;.darkMode&#39;</code> which simply applies the rules defined in the css file.</p> <p data-svelte-h="svelte-1hnl7i1">The second line will update the value of <code>darkMode</code> to <code>&#39;enabled&#39;</code> in the localStorage. So that the chosen mode stays in memory in page reload or in case of internet loss.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">function disableDarkMode() &#123;
  document.querySelector(&quot;main&quot;).classList.remove(&quot;darkMode&quot;);
  localStorage.setItem(&quot;darkMode&quot;, null);
&#125;</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1eqfpq5">A function of disabling the dark mode is required in case the user wants a light theme later on. The above function does exactly that.
It achieves this by doing the direct opposite of what <code>enableDarkMode()</code> function does.
The first line grabs the body element and removes the ‘.darkMode’ class which is responsible for applying the dark mode.
The second line updates the localStorage and changes the value of <code>darkMode</code> to <code>null</code>. You can think of <code>null</code> is <code>disabled</code>, you might even use it if you prefer it.</p> <p data-svelte-h="svelte-vwekmc">All the variables and functions been defined. But how do will apply them?
That is where the button comes in. A user will click a button to toggle between the modes. On every click a function will be called which will implement the requested changes. An event listenter which will be listening for the ‘click’ event will be added to the button.</p> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">toggleButton.addEventListener(&quot;click&quot;, () =&gt; &#123;
  darkMode = localStorage.getItem(&quot;darkMode&quot;);

  if (darkMode !== &quot;enabled&quot;) &#123;
    enableDarkMode();
  &#125; else &#123;
    disableDarkMode();
  &#125;
&#125;);</code>`}<!-- HTML_TAG_END --></pre> <p data-svelte-h="svelte-1f0gerh">When the button is clicked, the value of <code>darkMode</code> will be read from the localStorage.
This value is what is going to determine which function is going to be called.
The ‘if’ statement states that if the value of <code>darkMode</code> is not <code>enabled</code>, the <code>enableDarkMode()</code> function will be called which in return will set the page to dark mode. Otherwise it will call the <code>disableDarkMode()</code> function will result to the page being set to the default them.
And that is how you enable dark to your website which works offline.</p> <h3 data-svelte-h="svelte-1j6dyak">Full code</h3> <p data-svelte-h="svelte-b80oy5">Here are all the codes used in this project.</p> <h4 data-svelte-h="svelte-6ivc7z">HTML</h4> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;main&gt;
      &lt;button&gt;darkMode Toggle&lt;/button&gt;
      &lt;h1 class=&quot;heading&quot;&gt;welcome to dark mode&lt;/h1&gt;
    &lt;/main&gt;

    &lt;script src=&quot;app.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code>`}<!-- HTML_TAG_END --></pre> <h4 data-svelte-h="svelte-ncojlv">CSS</h4> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">body &#123;
  max-width: 100%;
  width: 100%;
  height: 100vh;
&#125;
main &#123;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
&#125;
h1 &#123;
  text-transform: uppercase;
&#125;

button &#123;
  position: absolute;
  top: 10px;
  right: 10px;
&#125;
.darkMode &#123;
  background-color: black;
  color: white;
&#125;
</code>`}<!-- HTML_TAG_END --></pre> <h4 data-svelte-h="svelte-y3cvrp">Javascript</h4> <pre class="language-undefined"><!-- HTML_TAG_START -->${`<code class="language-undefined">let darkMode = localStorage.getItem(&quot;darkMode&quot;);
let toggleButton = document.querySelector(&quot;button&quot;);

if (darkMode == &quot;enabled&quot;) &#123;
  enableDarkMode();
&#125;

function enableDarkMode() &#123;
  document.querySelector(&quot;main&quot;).classList.add(&quot;darkMode&quot;);
  localStorage.setItem(&quot;darkMode&quot;, &quot;enabled&quot;);
&#125;

function disableDarkMode() &#123;
  document.querySelector(&quot;main&quot;).classList.remove(&quot;darkMode&quot;);
  localStorage.setItem(&quot;darkMode&quot;, null);
&#125;

toggleButton.addEventListener(&quot;click&quot;, () =&gt; &#123;
  darkMode = localStorage.getItem(&quot;darkMode&quot;);

  if (darkMode !== &quot;enabled&quot;) &#123;
    enableDarkMode();
  &#125; else &#123;
    disableDarkMode();
  &#125;
&#125;);
</code>`}<!-- HTML_TAG_END --></pre>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(
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
export { __vite_glob_0_0 as _ };
