import { useLanguage } from "@/lib/i18n";

export function Gallery() {
  const { t } = useLanguage();
  const base = import.meta.env.BASE_URL;
  const galleryImages = [
    { src: `${base}assets/haircut-example1.jpg`, alt: "Haircut example 1 - Spider web design" },
    { src: `${base}assets/haircut-example2.jpg`, alt: "Haircut example 2 - Artistic fade" },
    { src: `${base}assets/haircut-example3.jpg`, alt: "Haircut example 3 - Hair transformation" },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-muted/30"
      data-testid="section-gallery"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden rounded-md group"
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
