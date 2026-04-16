import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import example1 from "@assets/example1_1762631894817.jpg";
import example2 from "@assets/example2_1762631894818.jpg";
import example3 from "@assets/example3_1762631894818.jpg";
import example4 from "@assets/example4_1762631894818.jpg";
import example5 from "@assets/example5_1762631894818.jpg";
import example6 from "@assets/example6_1762631894819.jpg";

const galleryImages = [
  { src: example1, alt: "Rose and clock tattoo" },
  { src: example2, alt: "Floral shoulder tattoo" },
  { src: example3, alt: "Mountain landscape tattoo" },
  { src: example4, alt: "Butterfly tattoo" },
  { src: example5, alt: "Bird with butterfly wings tattoo" },
  { src: example6, alt: "Floral carnation tattoo" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-primary mb-4 tracking-wider"
            data-testid="text-gallery-title"
          >
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative aspect-square overflow-hidden rounded-md group hover-elevate"
              data-testid={`button-gallery-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="modal-gallery"
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
