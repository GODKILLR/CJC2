import CinematicSection from "./CinematicSection";
import { motion } from "framer-motion";
import sectionCommunity from "@/assets/section-community.jpg";

const stats = [
  { value: "24/7", label: "Global Racing" },
  { value: "5", label: "Competitive Modes" },
  { value: "15,000", label: "NFTs Owned" },
  { value: "6", label: "Rarity Levels" },
];

const CommunitySection = () => {
  return (
    <>
      <CinematicSection
        id="community"
        label="TOGETHER"
        title="Race Against the World"
        description="Join the Tycoon Club and unlock exclusive earning opportunities. Members get development bonuses, referral rewards, and premium race access. Connect with racers worldwide who share your competitive drive."
        image={sectionCommunity}
        cta={{ label: "Join Discord", href: "#" }}
        cta2={{ label: "Join Telegram", href: "#" }}
        align="left"
      />

      {/* Stats bar */}
      <section className="border-y border-border/30 bg-card/30 px-6 py-12 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommunitySection;
