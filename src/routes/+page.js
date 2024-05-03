export async function load({fetch}) {

  const req = await fetch('/api/leads')
  const data = await req.json()


  return {
    leads : data,
  };
}

