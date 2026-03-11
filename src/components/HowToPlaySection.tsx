import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Get Your NFTs", desc: "Purchase a racehorse and jockey from the marketplace or buy a starter pack." },
  { step: "02", title: "Set Up Your Race", desc: "Match your horse and jockey attributes. Equip items and skills for competitive advantage." },
  { step: "03", title: "Race & Earn", desc: "Enter races against real players. Control your jockey in-game to secure victory and earn rewards." },
  { step: "04", title: "Breed & Trade", desc: "Breed champion bloodlines and trade on the marketplace to grow your stable." },
];

const HowToPlaySection = () => {
  return (
    <section id="how-to-play" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-primary">
            GETTING STARTED
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gradient-gold">How to Play</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-xl font-bold text-primary">
                {s.step}
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
