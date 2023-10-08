import axios from 'axios';
import * as cheerio from 'cheerio';
import { json, text } from '@sveltejs/kit';

async function getContributions() {
  let response;
  axios
    .get(`https://github.com/users/ronaldlat/contributions`)
    .then((res) => {
      const $ = cheerio.load(res.data.toString());
      //console.log($.html());
      //console.log($.text())

      response = $.text();
    })
    .catch((err) => console.log(err));

  console.log(response);

  return response;
}

export async function GET() {
  let response = await axios.get(
    `https://github.com/users/ronaldlat/contributions`
  );
  let r = cheerio.load(response.data);

  response = r.text();

  console.log(response);

  return text(response);
}
