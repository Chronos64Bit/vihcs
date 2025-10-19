import multer from "multer";
import { nanoid } from "nanoid";

export const config = { api: { bodyParser: false } };

const upload = multer();

const SECRET_KEY = process.env.UPLOAD_KEY; // Add your secret key in Vercel env vars

export default upload.single("image")(async (req, res) => {
  if (req.method !== "POST") return res.status(405).send("Method not allowed");

  const auth = req.headers.authorization;
  if (!auth || auth !== `Bearer ${SECRET_KEY}`)
    return res.status(403).send("Forbidden: Invalid API key");

  const id = nanoid(16); // 64-bit-ish ID
  const ext = req.file.originalname.split(".").pop();
  const fileName = `${id}.${ext}`;

  // Save to Vercel Blob storage
  await VERCEL_BLOB.put(`vihcs:${fileName}`, req.file.buffer);

  res.json({ url: `https://vihcs.ventryx.xyz/${fileName}` });
});
