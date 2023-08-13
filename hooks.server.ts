// this is the default behavior
import { Handle } from "@sveltejs/kit"
export const handle: Handle = async ({ event, resolve }) => resolve(event)

// you could return a 🍌 instead of a page
export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === '/hello') {
    return new Response('Hellloooo')
  }
}

