import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl text-primary mb-4 tracking-wider"
            data-testid="text-testimonials-title"
          >
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            {t.testimonials.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0</span>
            <span className="text-muted-foreground">• 26 {t.testimonials.reviews}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.testimonials.items.map((testimonial, index) => {
            const initials = testimonial.name.split(' ').map(n => n[0]).join('');
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg" data-testid={`text-reviewer-${index}`}>
                        {testimonial.name}
                      </h3>
                      <div className="flex gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.review}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
