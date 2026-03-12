import CinematicSection from "./CinematicSection";
import { motion } from "framer-motion";
import sectionCommunity from "@/assets/section-community.jpg";

const stats = [
  { value: "24/7", label: "Races Available" },
  { value: "5", label: "Game Modes" },
  { value: "15,000", label: "Total NFTs" },
  { value: "6", label: "Rarity Tiers" },
];

const CommunitySection = () => {
  return (
    <>
      <CinematicSection
        id="community"
        label="COMMUNITY"
        title="A Community Like No Other"
        description="Join the Tycoon Club and unlock exclusive earning opportunities. Members benefit from static development bonuses, referral rewards, and access to premium race modes. Connect with players around the world who share your passion."
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
