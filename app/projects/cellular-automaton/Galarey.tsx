import React, { useState } from 'react';
function GallerySection() {
  // 1. Add your images here. Use relative paths (e.g., "/ca1.gif" if in public folder)
  const galleryImages = [
    { src: "/ca1.gif", alt: "Cellular Artist - Generation 1" },
    { src: "/ca2.gif", alt: "Evolutionary Step" },
    { src: "/ca3.gif", alt: "RGB Interaction Model" },
    // Add more images here...
    // { src: "/ca4.gif", alt: "Mutation Logic" },
  ];
const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <>
      <div className="space-y-4">
        <label className="text-xs font-bold uppercase text-[#d67d7d] mb-2 block tracking-widest">
          Simulation Logs
        </label>

        {/* Grid Layout for Thumbnails */}
        <div className="grid grid-cols-2 gap-3">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`
                group relative aspect-square bg-gray-800 rounded-lg overflow-hidden 
                border border-gray-600 cursor-pointer hover:border-[#d67d7d] transition-all
                ${index === 0 ? "col-span-2 aspect-video" : ""} 
              `}
              // ^ The first image (index 0) spans 2 columns (Hero image style)
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />

              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <svg
                  className="w-8 h-8 text-white drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 font-mono text-center pt-2">
          Found {galleryImages.length} snapshots in local storage.
        </p>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)} // Click outside to close
        >
          <div className="relative max-w-5xl w-full max-h-screen flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] w-auto rounded border-2 border-[#39352f] shadow-2xl"
            />

            {/* Caption */}
            <p className="mt-4 text-[#d67d7d] font-mono text-lg font-bold">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
