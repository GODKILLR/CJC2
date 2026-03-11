import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-surface-elevated">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-xl">⭐</span>
            <span className="font-body text-xs tracking-[0.2em] text-primary">
              JOIN THE CLUB
            </span>
          </div>

          <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-gradient-gold">Tycoon Club</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
            Join the Tycoon Club and unlock exclusive earning opportunities. Members benefit from 
            static development bonuses, referral rewards for inviting friends and family, 
            and access to premium race modes. This virtual economy provides multiple avenues 
            for players to generate lifetime income.
          </p>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="px-10 py-6 text-base">
              Join Discord
            </Button>
            <Button variant="heroOutline" size="lg" className="px-10 py-6 text-base">
              Download Game
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "24/7", label: "Races Available" },
              { value: "5", label: "Game Modes" },
              { value: "15,000", label: "Total NFTs" },
              { value: "6", label: "Rarity Tiers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
