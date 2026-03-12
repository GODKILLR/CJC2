import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicSectionProps {
  id?: string;
  label: string;
  title: string;
  description: string;
  image: string;
  cta?: { label: string; href: string };
  cta2?: { label: string; href: string };
  align?: "left" | "right";
  children?: ReactNode;
}

const CinematicSection = ({
  id,
  label,
  title,
  description,
  image,
  cta,
  cta2,
  align = "left",
  children,
}: CinematicSectionProps) => {
  return (
    <section id={id} className="relative min-h-[70vh] overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        {align === "left" && (
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        )}
        {align === "right" && (
          <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-transparent" />
        )}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 lg:px-12">
        <div className={`max-w-xl ${align === "right" ? "ml-auto text-right" : ""}`}>
          {/* Category label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-display text-xs font-semibold tracking-[0.3em] text-primary"
          >
            {label}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-5 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
          >
            <span className="text-foreground">{title}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8 font-body text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`flex flex-wrap gap-3 ${align === "right" ? "justify-end" : ""}`}
          >
            {cta && (
              <a
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary backdrop-blur transition-all hover:bg-primary/20 hover:glow-gold"
              >
                {cta.label}
              </a>
            )}
            {cta2 && (
              <a
                href={cta2.href}
                target={cta2.href.startsWith("http") ? "_blank" : undefined}
                rel={cta2.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-xl border border-border/50 px-6 py-3 font-display text-sm font-semibold tracking-wider text-foreground backdrop-blur transition-all hover:border-primary/30"
              >
                {cta2.label}
              </a>
            )}
          </motion.div>

          {children}
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
