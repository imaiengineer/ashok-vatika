import React, { useState } from "react";

// Responsive Image Gallery (max 6 images)
// Usage: import Gallery from './Gallery';
// <Gallery images={[ 'url1', 'url2', ... ]} />

export default function Gallery({ images = null, max = 6 }) {
  const sample = [
    "gallery1.jpeg",
    "gallery2.jpeg",
    "gallery3.jpeg",
    "gallery4.jpeg",
    "gallery5.jpeg",
    "gallery6.jpeg",
  ];

  // Ensure we never show more than `max` images (default 6)
  const imgs = (Array.isArray(images) && images.length ? images : sample).slice(
    0,
    max
  );

  const [lightboxIndex, setLightboxIndex] = useState(-1);

  function openLightbox(i) {
    setLightboxIndex(i);
    // prevent background scrolling when modal open
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxIndex(-1);
    document.body.style.overflow = "auto";
  }

  function prev() {
    setLightboxIndex((idx) => (idx === 0 ? imgs.length - 1 : idx - 1));
  }

  function next() {
    setLightboxIndex((idx) => (idx === imgs.length - 1 ? 0 : idx + 1));
  }

  return (
    <div className="max-w-[1300px] mx-auto p-4 pt-[10rem]" id="gallery">
      <h2 className="heading-secondary mb-4">Captured Moments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="group overflow-hidden rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label={`Open image ${i + 1}`}
          >
            <div className="relative">
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 sm:h-56 md:h-48 lg:h-56 object-cover transform group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {lightboxIndex >= 0 && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${lightboxIndex + 1} of ${imgs.length}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeLightbox}
            aria-hidden="true"
          />

          <div className="relative max-w-5xl w-full mx-auto">
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-10 rounded-full bg-white/90 p-2 shadow-md focus:outline-none"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={imgs[lightboxIndex]}
              alt={`Large ${lightboxIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg bg-white"
            />

            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={prev}
                className="rounded px-3 py-1 bg-white/90 shadow focus:outline-none"
                aria-label="Previous image"
              >
                ‹ Prev
              </button>

              <div className="text-sm text-white/90">
                {lightboxIndex + 1} / {imgs.length}
              </div>

              <button
                onClick={next}
                className="rounded px-3 py-1 bg-white/90 shadow focus:outline-none"
                aria-label="Next image"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
