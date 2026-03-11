import { motion } from "framer-motion";
import { Swords, Trophy, Users, Coins } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "PvP Racing",
    description: "Race against real players in real-time competitive matches. Strategy and skill determine the winner.",
  },
  {
    icon: Trophy,
    title: "Earn Rewards",
    description: "Win CJC coins, exclusive badges, and rare NFT items by competing in tournaments and daily races.",
  },
  {
    icon: Users,
    title: "Breed Champions",
    description: "Breed your NFT horses to create offspring with unique attributes, abilities, and bloodlines.",
  },
  {
    icon: Coins,
    title: "NFT Marketplace",
    description: "Trade racehorses, jockeys, and equipment on the marketplace. Every asset is player-owned.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-primary">
            WHY CJC RACE
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gradient-gold">Game Features</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:glow-gold"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
