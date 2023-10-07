import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function tweenMe(node) {
	let tl = gsap.timeline({
		onComplete: tweenComplete
	});
	const duration = 1;

	tl.from(node, {
		duration,
		opacity: 0
	}).from(
		node,
		{
			duration,
			xPercent: 100,
			rotation: -90,
			yPercent: 100,
			ease: 'bounce.out'
		},
		`-=${duration * 0.75}`
	);

	function tweenComplete() {
		node.dispatchEvent(new CustomEvent('tweenComplete'));
	}

	return {
		destroy() {
			tl = null;
		}
	};
}

export function scrowlly(node) {
	let tl;
	gsap.from(node, {
		scrollTrigger: node,
		x: 500
	});

	return {
		destroy() {
			tl = null;
		}
	};
}
export function example(node) {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: 'bottom 80%',
			end: `+=${node.offsetHeight}`,
			scrub: 2
		},
		onComplete: tweenComplete
	});
	tl.from(node, { x: 600, duration: 3 }, '<');
	tl.from(node, { opacity: 0, duration: 3 }, '<');

	function tweenComplete() {
		console.log(node.offsetHeight);
		node.dispatchEvent(new CustomEvent('tweenComplete'));
	}

	return {
		destroy() {
			tl = null;
		}
	};
}
// fade
export function gFade(node) {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: node,
			start: 10,
			end: `+=${node.offsetHeight}`,
			scrub: 2
			//markers: true
		},
		onComplete: tweenComplete
	});
	tl.from(node, { opacity: 0, duration: 2 }, '<');

	function tweenComplete() {
		node.dispatchEvent(new CustomEvent('tweenComplete'));
	}

	return {
		destroy() {
			tl = null;
		}
	};
}
