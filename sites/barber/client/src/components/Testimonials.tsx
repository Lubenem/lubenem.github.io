import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

const testimonials = [
  {
    text: "These barbers understand what a fade is and do great work!",
    author: "L. Gilder",
    rating: 5,
  },
  {
    text: "Incredible service! Best haircut I've had in years.",
    author: "Fabrisio",
    rating: 5,
  },
  {
    text: "Great attention to detail. I haven't had a cut this good in a long time.",
    author: "Jose Manuel Morales",
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-background"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl md:text-5xl uppercase tracking-wider text-foreground mb-4"
            data-testid="text-testimonials-title"
          >
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-visible"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>

                <p className="text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
