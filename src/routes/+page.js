export async function load() {

  let req = await fetch('bakeries.json')
  let res = await req.json()
  console.log('response: ',res)


  const bake = 'bake me'

  return {
    //bakeries: await res,
    bake
  };
}

