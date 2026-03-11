import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-horses.jpg";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="CJC Race horses" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-12">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-display text-5xl font-bold leading-[1.05] md:text-6xl lg:text-8xl"
          >
            <span className="text-foreground">The Future of</span>
            <br />
            <span className="text-gradient-gold">Blockchain</span>
            <br />
            <span className="text-foreground">Horse Racing</span>
            <br />
            <span className="text-gradient-gold">is Here!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Dominate the racetrack in this electrifying P2E horse racing game!
            Own NFT racehorses, jockeys & items with unique attributes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 font-display text-sm font-semibold tracking-wider text-primary"
          >
            Download now for free!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.cjcrace.io/download"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-card/80 px-5 py-3 backdrop-blur transition-all hover:border-primary/50 hover:glow-gold"
            >
              <Download className="h-6 w-6 text-primary" />
              <div>
                <p className="font-body text-[10px] text-muted-foreground">Download on</p>
                <p className="font-display text-sm font-semibold text-foreground">Windows / Mac</p>
              </div>
            </a>
            <a
              href="https://www.cjcrace.io/download"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-card/80 px-5 py-3 backdrop-blur transition-all hover:border-primary/50 hover:glow-gold"
            >
              <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              <div>
                <p className="font-body text-[10px] text-muted-foreground">Download on</p>
                <p className="font-display text-sm font-semibold text-foreground">App Store</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
