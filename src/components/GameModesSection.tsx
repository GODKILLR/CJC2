import CinematicSection from "./CinematicSection";
import { motion } from "framer-motion";
import sectionModes from "@/assets/section-modes.jpg";

const modes = [
  {
    icon: "🏆",
    title: "Champion Stakes",
    desc: "Match rarity & distance to 4-hour events. Top 3 earn CJC coins + Climax Tokens.",
  },
  {
    icon: "🏅",
    title: "League Challenges",
    desc: "24/7 competitive racing with seasonal rankings and milestone rewards.",
  },
  {
    icon: "👑",
    title: "Grand Master Cups",
    desc: "Multi-round tournaments with advancing top 6. Features the CJC Jackpot Trophy.",
  },
  {
    icon: "⚔️",
    title: "PVP & Practice",
    desc: "Free-form PVP with betting options. Practice mode with AI opponents for testing.",
  },
];

const GameModesSection = () => {
  return (
    <>
      <CinematicSection
        id="modes"
        label="LEGEND"
        title="Conquer the Racetrack"
        description="From Champion Stakes to PVP battles, CJC Race offers multiple competitive modes. Each mode features unique rules, rewards, and challenges. Rise through the ranks and claim your glory."
        image={sectionModes}
        cta={{ label: "View Game Modes", href: "https://www.cjcrace.io/gameinfo" }}
        align="left"
      />

      {/* Mode cards */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur transition-all hover:border-primary/30 hover:bg-card/60"
            >
              <span className="mb-3 block text-2xl">{mode.icon}</span>
              <h4 className="mb-2 font-display text-sm font-semibold tracking-wider text-foreground">
                {mode.title}
              </h4>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">
                {mode.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GameModesSection;
