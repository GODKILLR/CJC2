import { motion } from "framer-motion";
import heroImage from "@/assets/hero-horses.jpg";
import { Download, Trophy, Coins, Swords, BarChart3 } from "lucide-react";
import sectionAdventure from "@/assets/section-adventure.jpg";

const quickCards = [
  {
    icon: Coins,
    title: "EARN",
    desc: "Earn CJC coins through racing",
    href: "#packs",
    image: sectionAdventure,
  },
  {
    icon: Trophy,
    title: "GAME MODES",
    desc: "Compete in 5 unique modes",
    href: "#modes",
    image: null,
  },
  {
    icon: Swords,
    title: "NFT ASSETS",
    desc: "Collect horses, jockeys & items",
    href: "#nfts",
    image: null,
  },
  {
    icon: BarChart3,
    title: "MARKETPLACE",
    desc: "Trade NFTs on the market",
    href: "https://market.cjcrace.io",
    image: null,
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="CJC Race horses" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 font-display text-4xl font-bold leading-[1.1] md:text-5xl lg:text-7xl"
        >
          <span className="text-foreground">Shaping the Future of</span>
          <br />
          <span className="text-gradient-gold">Blockchain Horse Racing</span>
        </motion.h1>

        {/* Glassmorphic CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-xl"
        >
          <p className="mb-3 font-display text-lg font-semibold tracking-wide text-foreground md:text-xl">
            Play-to-Earn Racing
          </p>
          <p className="mb-5 font-display text-2xl font-bold text-gradient-gold md:text-3xl">
            Download Now for Free
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.cjcrace.io/download"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary backdrop-blur transition-all hover:bg-primary/20 hover:glow-gold"
            >
              <Download className="h-4 w-4" />
              Windows / Mac
            </a>
            <a
              href="https://www.cjcrace.io/download"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary backdrop-blur transition-all hover:bg-primary/20 hover:glow-gold"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </a>
          </div>
        </motion.div>
      </div>

      {/* Quick access cards - WoD style */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {quickCards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-lg transition-all hover:border-primary/40 hover:glow-gold"
            >
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10 p-5">
                <card.icon className="mb-3 h-6 w-6 text-primary" />
                <p className="mb-1 font-display text-sm font-bold tracking-wider text-primary">
                  {card.title}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {card.desc}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
