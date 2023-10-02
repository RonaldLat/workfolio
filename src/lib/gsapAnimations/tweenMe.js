    import {gsap} from 'gsap'
    import {ScrollTrigger} from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger)

export function tweenMe(node) {
	let tl = gsap.timeline({
		onComplete: tweenComplete
	});
	const duration = 1;

	tl.from(node, {
		duration,
		opacity: 0
	})
	.from(node, {
		duration,
		xPercent: 100,
		rotation: -90,
		yPercent: 100,
		ease: 'bounce.out',
	},
	`-=${duration * 0.75}`
	)

	function tweenComplete () {
		node.dispatchEvent(
			new CustomEvent('tweenComplete')
		);
	}

	return {
		destroy() {
			tl = null;
		}
	}
}

export function scrowlly(node){
  let tl
  gsap.from(node, {
    scrollTrigger: node,
    x:500
  })

	return {
		destroy() {
			tl = null;
		}
  }
}
export function example(node){

  let tl = gsap.timeline({
    scrollTrigger: node,
    onComplete: tweenComplete
  })
  tl.to(node, {x: 600, duration: 2}, 1)
  tl.to(node, {x: 600, duration: 1}, "<")
  tl.to(node, {x: 600, duration: 1}, "+=1")



	function tweenComplete () {
		node.dispatchEvent(
			new CustomEvent('tweenComplete')
		);
	}

	return {
		destroy() {
			tl = null;
		}
	}
}
