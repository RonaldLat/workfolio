export async function load({fetch, locals: { supabase }}  ) {


  let { data: categories, error } = await supabase
    .from('latcrm96')
    .select('types', {distinct: true})



  return {
    categories
  };
}



