<script>
import { scroll, animate } from "motion"
import { onMount } from "svelte";

let latestPosts = [];
onMount(async ()=>{

const response = await fetch(`/api/posts?limit=4`);
latestPosts = await response.json();
console.log(latestPosts)


const cardsWrapper = document.querySelector('#cards');
const cards = document.querySelectorAll('.card');

const numCards = cards.length;

cards.forEach((card, index0) => {

	const index = index0 + 1;
	const reverseIndex = numCards - index0;
	const reverseIndex0 = numCards - index;

	// Extra padding per card, so you can see the other stacked cards underneath at the top
	//card.style.paddingTop = `calc({index} * var(--card-top-offset))`;
	card.style.paddingTop = `calc({index} * 1em`;

	// Scroll-Linked Animation
	scroll(
		animate(card, {
			// Earlier cards shrink more than later cards
			scale: [ 1, 1 - (0.1 * reverseIndex0)],
		}), {
			// Each card should only shrink when it’s at the top.
			// We can’t use exit on the els for this (as they are sticky)
			// but can track cardsWrapper instead.
			target: cardsWrapper,
			offset: [`{index0 / numCards * 100}%`, `{index / numCards * 100}%`],
		}
	);
});

        })
</script>

<div class="h-screen"></div>
<main class="">
	<ul class="  max-w-md mx-auto"id="cards">
  {#each latestPosts as post }
		<li class="card  bg-transparent top-20" id="card_1">
			<div class="card__content bg-myColor-400 py-2 rounded-md h-72">
				<div class="text-gray-700">
					<h2 class="text-md font-semibold">{post.title}</h2>
					<p class="text-xs">{post.excerpt}</p>
					<p><a href="{`blog/${post.slug}`}" class="btn btn--accent p-1 rounded-md bg-myColor-100 text-sm">Read more</a></p>
				</div>
				<figure>
					<img class="rounded-sm pr-2 w-full h-full object-cover " src="blogImages/{post.banner}" alt="Image description">
				</figure>
			</div>
		</li>
  {/each}
	</ul>
</main>


<style>:root {
	--card-height: 40vw;
	--card-margin: 4vw;
	--card-top-offset: 1em;
	--numcards: 6;
	--outline-width: 0px;
}

#cards {
	padding-bottom: calc(var(--numcards) * var(--card-top-offset)); /* Make place at bottom, as items will slide to that position*/
	margin-bottom: var(--card-margin); /* Don't include the --card-margin in padding, as that will affect the scroll-timeline*/
}

.card {
	position: sticky;
	padding-top: var(--card-top-offset);
	transform-origin: 50% 0%;
	will-change: transform;
}
#cards {
	list-style: none;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(var(--numcards), var(--card-height));
	gap: var(--card-margin);
}


.card__content {
	/*box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);*/
	overflow: hidden;

	display: grid;
	grid-template-areas: "text img";
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;

	align-items: stretch;
}

.card__content > div {
	grid-area: text;
	width: 80%;
	place-self: center;
	text-align: left;

	display: grid;
	gap: 1em;
	place-items: start;
}

.card__content > figure {
	grid-area: img;
	overflow: hidden;
}


p {
	font-family: sans-serif;
	font-weight: 300;
	line-height: 1.42;
}
</style>

