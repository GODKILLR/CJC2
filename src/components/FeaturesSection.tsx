import { motion } from "framer-motion";
import { Swords, Trophy, Sprout, Sparkles, Shield, Gamepad2 } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Manual & Auto Race",
    desc: "Control your jockey in real-time or use auto-race mode. Master exit timing, direction control, and strategic whip boosts.",
  },
  {
    icon: Sprout,
    title: "Farm System",
    desc: "Cultivate crops on your farm, exchange harvests for props or CJC Coins. Expand from 3 to 9 fields through experience.",
  },
  {
    icon: Shield,
    title: "Day Spa",
    desc: "Member-exclusive facility for horse condition restoration. Bid on operating rights to earn washing fees from other players.",
  },
  {
    icon: Sparkles,
    title: "Special Skills",
    desc: "Acquire random skills via Spell Books. Equip up to 2 per racehorse for temporary boosts triggered during races.",
  },
  {
    icon: Trophy,
    title: "Daily Missions",
    desc: "Complete 3 random daily missions for diamonds. Finish all three for bonus rewards. Trade diamonds to swap missions.",
  },
  {
    icon: Swords,
    title: "Burning & Synthesis",
    desc: "Upgrade common N and R NFTs using synthesis. Burn lower rarity NFTs and pay CJC coins to generate rarer ones.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xl">⭐</span>
          <span className="font-body text-xs tracking-[0.2em] text-primary">
            EXPLORE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-display text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient-gold">Game Features</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:glow-gold"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
