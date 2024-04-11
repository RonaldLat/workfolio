import {writable} from "svelte/store";

export let cart = writable([])

export const name = writable('lat')
export const category_links = writable([
  {link: '/audio', title: 'Lubricants', img: 'jeep7.jpg'},
  {link: '/power', title: 'Suspensions', img: 'jeep3.jpg'},
  {link: '/grooming', title: 'Engine Parts', img: 'jeep4.jpg'},
  {link: '/lifestyle', title: 'Tyres', img: 'jeep6.jpg'},
  //{link: '/home-decor', title: 'home-decor', img: 'home_decor.jpg'},
  //{link: '/outdoor', title: 'outdoor', img: 'outdoor.jpg'},
])


export const makes = writable([
  {link: '/audio', title: 'audi', img: 'jeep7.jpg'},
  {link: '/power', title: 'jeep', img: 'jeep3.jpg'},
  {link: '/grooming', title: 'range rover', img: 'jeep4.jpg'},
  {link: '/lifestyle', title: 'volkswage', img: 'jeep6.jpg'},
  //{link: '/home-decor', title: 'home-decor', img: 'home_decor.jpg'},
  //{link: '/outdoor', title: 'outdoor', img: 'outdoor.jpg'},
])
