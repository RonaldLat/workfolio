import { error, redirect } from "@sveltejs/kit";

export const POST = async({locals})=>{
  const {error: err} = await locals.supabase.auth.signOut()
  if(error){

  console.log('localskl', locals )
    throw error(500, 'Something went wront when logging you out')
  }

  throw redirect(300, '/')
}
