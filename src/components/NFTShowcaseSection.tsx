import { motion } from "framer-motion";
import { useState } from "react";
import nftHorse from "@/assets/nft-horse.png";
import nftJockey from "@/assets/nft-jockey.png";
import nftItems from "@/assets/nft-items.png";

const nftTypes = [
  {
    id: "racehorse",
    label: "🐎 Racehorse",
    title: "Racehorse NFTs",
    image: nftHorse,
    description:
      "Racehorse NFTs possess attributes like speed, burst, stamina, and toughness. Each has preferences for race distance, direction, weather, and track type. When preferences align with race conditions, performance increases significantly.",
    stats: [
      { label: "Speed", desc: "Average speed determining min/max velocity" },
      { label: "Burst", desc: "Acceleration boost when whipped" },
      { label: "Stamina", desc: "Depletes during race, faster at higher speeds" },
      { label: "Toughness", desc: "Additional stamina consumed per whip" },
    ],
  },
  {
    id: "jockey",
    label: "🤠 Jockey",
    title: "Jockey NFTs",
    image: nftJockey,
    description:
      "Jockey NFTs possess attributes like weight, balance, and technique. Control your jockey manually or use auto-race mode. Execute precise timing on the exit indicator, control direction, adjust whip pressure, and use strategic speed boosts.",
    stats: [
      { label: "Technique", desc: "Affects racing set speed and push effectiveness" },
      { label: "Balance", desc: "Speed reduction per collision and fall resistance" },
      { label: "HP", desc: "6-16 based on rarity and level, restores every 4 hours" },
      { label: "Control", desc: "Manual or auto-race mode options" },
    ],
  },
  {
    id: "items",
    label: "🧢 Items",
    title: "Item NFTs",
    image: nftItems,
    description:
      "Item NFTs enhance specific attributes for either the Racehorse or Jockey. There are 12 types of items available. Players can equip up to 4 different Items from various categories in a racing set for maximum strategic advantage.",
    stats: [
      { label: "Whip", desc: "Enhances Racehorse's burst attribute" },
      { label: "Silks", desc: "Improves Jockey's balance" },
      { label: "12 Types", desc: "Various categories for strategic builds" },
      { label: "Max 4 Slots", desc: "Equip up to 4 different items per set" },
    ],
  },
];

const NFTShowcaseSection = () => {
  const [activeNFT, setActiveNFT] = useState(0);
  const current = nftTypes[activeNFT];

  return (
    <section id="nfts" className="section-padding bg-surface-elevated">
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
            YOUR ASSETS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 font-display text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient-gold">NFT Collection</span>
        </motion.h2>

        {/* Tabs */}
        <div className="mb-12 flex gap-2 overflow-x-auto">
          {nftTypes.map((nft, i) => (
            <button
              key={nft.id}
              onClick={() => setActiveNFT(i)}
              className={`whitespace-nowrap rounded-full border px-6 py-3 font-display text-sm tracking-wider transition-all ${
                activeNFT === i
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30"
              }`}
            >
              {nft.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />
              <img
                src={current.image}
                alt={current.title}
                className="relative z-10 max-h-[400px] w-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 font-display text-3xl font-bold text-foreground">
              {current.title}
            </h3>
            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground">
              {current.description}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {current.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <p className="mb-1 font-display text-sm font-semibold text-primary">
                    {stat.label}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTShowcaseSection;
