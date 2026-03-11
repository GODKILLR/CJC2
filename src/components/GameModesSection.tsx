import { motion } from "framer-motion";
import modeChampion from "@/assets/mode-champion.jpg";
import modeLeague from "@/assets/mode-league.jpg";
import modeGrandmaster from "@/assets/mode-grandmaster.jpg";
import modePvp from "@/assets/mode-pvp.jpg";

const gameModes = [
  {
    title: "Champion Stakes",
    image: modeChampion,
    desc: "Exclusive member mode with compelling rewards. Match your Racehorse's distance and rarity to 4-hour events. Top 3 earn CJC coins, Climax Tokens, and props.",
  },
  {
    title: "League Challenges",
    image: modeLeague,
    desc: "Competitive gameplay across short, medium, and long distances. Race 24/7, earn seasonal points, and receive diamonds, CJC coins, and props based on final standings.",
  },
  {
    title: "Grand Master Cups",
    image: modeGrandmaster,
    desc: "Periodic events open to all players. Top 6 advance each round with CJC coin rewards. Features the prestigious CJC Jackpot Trophy with massive prize pools.",
  },
  {
    title: "PVP Races",
    image: modePvp,
    desc: "Available 24/7 with full customization. Create or join races with specific rarity requirements and optional betting. Hone your jockey control and strategy skills.",
  },
];

const GameModesSection = () => {
  return (
    <section id="modes" className="section-padding">
      <div className="mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xl">⭐</span>
          <span className="font-body text-xs tracking-[0.2em] text-primary">
            EXPERIENCE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-display text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient-gold">Game Modes</span>
        </motion.h2>

        {/* Grid - Pegaxy style image cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {gameModes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={mode.image}
                  alt={mode.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
                  {mode.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {mode.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Game modes detail list - like Pegaxy */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
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
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <span className="mb-3 block text-2xl">{item.icon}</span>
              <h4 className="mb-2 font-display text-base font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="font-body text-xs leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
