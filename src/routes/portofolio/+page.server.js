  import OpenAI from 'openai'
  import { OPENAI_KEY } from "$env/static/private";

  const openai = new OpenAI({
          apiKey: OPENAI_KEY
      })
  console.log(openai)


async function main() {
  const image = await openai.images.generate({ prompt: "A cute baby sea otter" });

  console.log(image.data);
}
main();
