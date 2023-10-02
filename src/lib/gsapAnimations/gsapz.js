	import gsap from 'gsap';

	let visible = true;
	const duration = 1;

	function tweenIn (node) {
		let tl = gsap.timeline();

		tl.from(node, {
			duration,
			opacity: 0
		})
		.from('.box', {
			duration,
			xPercent: 100,
			rotation: -90,
			yPercent: 100,
			ease: 'bounce.out',
		}, `-=${duration * 0.75}`)

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: duration * 1000,
			tick: t => {
				tl.progress(t);
			}
		}
	}

	function tweenOut (node) {
		let tl = gsap.timeline();

		tl.to(node, {
			duration,
			yPercent: 100,
			ease: 'back.in',
		})
		.to('.box', {
			duration: duration * 0.25,
			opacity: 0
		}, `-=${duration * 0.25}`)

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: duration * 1000,
			tick: (t, u) => {
				tl.progress(u);
			}
		}
  }


//usage
//{#if visible}{/if}
//in:tweenIn
//out:tweenOut
