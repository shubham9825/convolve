import React, { useEffect, useState } from "react";

const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_SERVER_URL
          }/images?key=Object-Detection-using-ai-6.png`
        );
        const data = await response.json();
        if (data.url) {
          setImageUrl(data.url);
        }
      } catch (error) {
        console.log("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
  }, []);

  return (
    <div>
      <h1>Image from S3 Bucket</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="S3 Image" style={{ width: "500px" }} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageComponent;
