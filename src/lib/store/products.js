import {writable} from "svelte/store";

export let cart = writable([])

export const name = writable('lat')
export const category_links = writable([
  {link: '/audio', title: 'audio', img: 'living.jpg'},
  {link: '/power', title: 'power', img: 'bedroom.jpg'},
  {link: '/phones', title: 'phones', img: 'dining.jpg'},
  {link: '/lifestyle', title: 'lifestyle', img: 'office.jpg'},
  //{link: '/home-decor', title: 'home-decor', img: 'home_decor.jpg'},
  //{link: '/outdoor', title: 'outdoor', img: 'outdoor.jpg'},
])


