export async function load({ fetch, locals: { supabase } }) {

  let { data: categories, error } = await supabase
    .from('latcrm96')
    .select('types', { distinct: true })

  const { count, error: err } = await supabase
    .from('latcrm96')
    .select('*', { count: 'exact', head: true })





  return {
    categories,
    count: count || ''
  };
}



