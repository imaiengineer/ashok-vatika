import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images");
        return res.json();
      })
      .then((data) => {
        setImages(data.images || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching images:', err);
        setError("Could not load gallery images. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading gallery...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {images.length === 0 ? (
          <p>No images found in the gallery.</p>
        ) : (
          images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              aria-hidden = "true"
              style={{ width: '300px', height: 'auto', borderRadius: '8px' }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;
