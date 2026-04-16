import { useEffect } from "react";
import AOS from "aos";
import { useI18n } from "@/lib/i18n";
import img1 from "@assets/massage-process-example1_1766933985317.jpg";
import img2 from "@assets/massage-process-example2_1766933985316.jpg";
import img3 from "@assets/massage-process-example3_1766933985315.jpg";

export function Gallery() {
  const { t } = useI18n();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const images = [img1, img2, img3];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t("gallery.title")}
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl overflow-hidden shadow-md group relative ${
                idx === 1 ? "md:mt-12" : ""
              }`}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
