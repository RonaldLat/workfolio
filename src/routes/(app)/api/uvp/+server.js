import { createReadableStream } from "@sveltejs/kit/node";
import { put } from "@vercel/blob";

export async function POST({ request, locals: { supabase } }) {
  const form_data = await request.formData()
  const inputs = Object.fromEntries(form_data)
  console.log(inputs)
  // Check if logo file is present
  if (inputs.logo) {
    console.log(inputs.logo)
    const { url } = await put(inputs.logo.name, request.body, { access: 'public' });
    console.log('url', url)

    return Response.json({
      url
    });
    // Create a file stream for the logo
    const logoStream = createReadableStream(logo.path);

    // Upload the logo to Supabase Storage
    const { data: logoData, error: logoError } = await supabase.storage
      .from('logos')
      .upload(logo.name, logoStream);

    // Handle logo upload error
    if (logoError) {
      return {
        status: 500,
        body: { error: logoError.message }
      };
    }

    // Update the logo value to the uploaded file URL
    logo = logoData.Key;
  }

  // Insert data into the 'uvp' table
  const { data, error } = await supabase
    .from('uvp')
    .insert(inputs);

  // Handle the response
  if (error) {
    console.log('error', error)
    return new Response({
      status: 500,
      body: { error: error.message }
    });
  } else {
    console.log('data', data)
    return new Response({
      status: 200,
      body: { data }
    });
  }
}

