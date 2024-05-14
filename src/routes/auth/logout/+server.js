import { error, redirect } from "@sveltejs/kit";

export const POST = async ({ locals }) => {
  const { error: err } = await locals.supabase.auth.signOut()
  if (err) {
    console.log('logout error', err)
    throw error(500, 'Something went wront when logging you out')
    // throw redirect(300, '/')
  }


  console.log('logged out successfully')
  throw redirect(300, '/auth/login')
}
