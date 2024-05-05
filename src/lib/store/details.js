import {writable, readable} from "svelte/store";

export const business = writable({
  phone: '712000000',
  email: 'example@email.com',
  whatsapp: '0712000000',
  address_1: 'Odeon',
  address_2: 'Nairobi, Kenya',
  name_part1: 'Bake',
  name_part2: 'Master',
  abbrev: 'CM',
  hero1: 'look & feel smart',
  hero2: 'authorized oraimo dealer',
  categories: [
    {link: '/audio', title: 'audio', img: 'earbuds.webp'},
    {link: '/power', title: 'power', img: 'powerbank.webp'},
    {link: '/grooming', title: 'grooming', img: 'trimmer.webp'},
    {link: '/lifestyle', title: 'lifestyle', img: 'smartwatch2.webp'},
  ]


})


