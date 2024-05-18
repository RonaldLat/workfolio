// Import necessary modules
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Define the API endpoint
export async function post({ request }) {
  // Extract form data from the request body
  const { businessName, logo, slogan, phoneNumber, ...otherData } = await request.formData();
  // Check if logo file is present
if (logo) {
  // Create a file stream for the logo
  const logoStream = createReadStream(logo.path);

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
    .insert({
      businessName,
      logo,
      slogan,
      phoneNumber,
      ...otherData
    });

  // Handle the response
  if (error) {
    return {
      status: 500,
      body: { error: error.message }
    };
  } else {
    return {
      status: 200,
      body: { data }
    };
  }
}

