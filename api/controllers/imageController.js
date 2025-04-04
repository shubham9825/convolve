const { getObjectURL } = require("../aws/s3Services");

exports.getImage = async (req, res) => {
  const { key } = req.query;

  if (!key) {
    return res.status(400).json({ error: "Image key is required" });
  }

  try {
    const url = await getObjectURL(key);
    res.status(200).json({ url });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Error fetching image" });
  }
};
