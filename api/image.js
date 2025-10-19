export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).send("No ID provided");

  const blob = await VERCEL_BLOB.get(`vihcs:${id}`);
  if (!blob) return res.status(404).send("Not found");

  const ext = id.split(".").pop().toLowerCase();
  const mime = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp"
  }[ext] || "application/octet-stream";

  res.setHeader("Content-Type", mime);
  res.send(blob);
}
