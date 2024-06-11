import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const router = express.Router();


// Define __dirname in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);
async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}
router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
  console.log(process.env.OPENAI_API_KEY)
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const imageBlob = await query({"inputs": prompt});
      //  query({"inputs": prompt}).then((response) => {
    
      // console.log(response);
      //const image = response.data;
   //   const image = response;

//   res.status(200).json({ photo: image });
      // Use image
    // });
          // Convert Blob to Buffer
          const buffer = Buffer.from(await imageBlob.arrayBuffer());
        
         const filePath = path.join('C://Projects/3DReact3JS/client/public/T-shirt.png');
          console.log(filePath)
          // Save the image locally
          fs.writeFileSync(filePath, buffer);

          // Set the appropriate headers and send the image buffer
          res.setHeader('Content-Type', 'image/jpeg');
          res.send(buffer);
    // const response = await openai.createImage({
    //   prompt,
    //   n: 1,
    //   size: '1024x1024',
    //   response_format: 'b64_json'
    // });

    // const image = response.data.data[0].b64_json;

    // res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;