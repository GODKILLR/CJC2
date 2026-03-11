import { motion } from "framer-motion";
import aboutBg from "@/assets/about-bg.jpg";
import nftHorse from "@/assets/nft-horse.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={aboutBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl section-padding">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xl">⭐</span>
          <span className="font-body text-xs tracking-[0.2em] text-primary">
            INTRODUCING CJC RACE
          </span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-gradient-gold">Play to Earn</span>
              <br />
              <span className="text-foreground">Racing Game</span>
            </h2>
            <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground">
              Climax Jockey Club (CJC Race) is an exhilarating real-time racehorse racing game 
              designed for both gamers and crypto enthusiasts using blockchain technology and NFTs.
            </p>
            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground">
              Players compete with Racehorses, Jockeys, and Items — each possessing unique attributes 
              and abilities. Winners earn CJC coins, the in-game currency, and valuable props that 
              enhance gameplay. Races are available 24/7 for players worldwide.
            </p>

            {/* NFT type badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { emoji: "🐎", label: "Racehorse NFTs" },
                { emoji: "🤠", label: "Jockey NFTs" },
                { emoji: "🧢", label: "Item NFTs" },
              ].map((nft) => (
                <div
                  key={nft.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
                >
                  <span className="text-lg">{nft.emoji}</span>
                  <span className="font-display text-xs tracking-wider text-foreground">
                    {nft.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={nftHorse}
              alt="CJC Race NFT Horse"
              className="max-h-[500px] w-auto animate-float drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
