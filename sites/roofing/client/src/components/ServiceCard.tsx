import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="group p-8 bg-white border border-border/50 rounded-sm hover:border-primary/50 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="mb-6 inline-flex p-4 bg-muted/50 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
