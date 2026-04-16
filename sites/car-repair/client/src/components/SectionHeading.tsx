import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, align = 'center', className, light = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", align === 'center' ? 'text-center' : 'text-left', className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-lg md:text-xl max-w-2xl mx-auto font-light",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <div className={cn(
        "h-1 w-20 mt-6 bg-accent rounded-full",
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
}
