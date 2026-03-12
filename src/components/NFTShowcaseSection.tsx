import { motion } from "framer-motion";
import { useState } from "react";
import CinematicSection from "./CinematicSection";
import sectionNfts from "@/assets/section-nfts.jpg";
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
      "Racehorse NFTs possess attributes like speed, burst, stamina, and toughness. Each has preferences for race distance, direction, weather, and track type.",
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
      "Jockey NFTs possess attributes like weight, balance, and technique. Control your jockey manually or use auto-race mode.",
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
      "Item NFTs enhance specific attributes for either the Racehorse or Jockey. There are 12 types of items available. Equip up to 4 per racing set.",
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
    <>
      {/* Cinematic banner */}
      <CinematicSection
        id="nfts"
        label="EPIC"
        title="Collect Unique NFT Assets"
        description="Own NFT racehorses, jockeys, and items with unique attributes. Each NFT has distinct stats that affect performance on the racetrack. Build your ultimate racing set."
        image={sectionNfts}
        cta={{ label: "Visit Marketplace", href: "https://market.cjcrace.io" }}
        cta2={{ label: "Explore NFTs", href: "#nft-detail" }}
        align="right"
      />

      {/* Detail section below */}
      <section id="nft-detail" className="relative overflow-hidden bg-surface-elevated px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Tabs with animation */}
          <div className="mb-12 flex justify-center gap-2">
            {nftTypes.map((nft, i) => (
              <motion.button
                key={nft.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveNFT(i)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`whitespace-nowrap rounded-xl border px-5 py-2.5 font-display text-xs tracking-wider transition-all ${
                  activeNFT === i
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary/20"
                }`}
              >
                {nft.label}
              </motion.button>
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
                <div className="absolute -inset-16 rounded-full bg-primary/5 blur-3xl" />
                <motion.img
                  src={current.image}
                  alt={current.title}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 max-h-[380px] w-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                {current.title}
              </h3>
              <p className="mb-8 font-body text-sm leading-relaxed text-muted-foreground">
                {current.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {current.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/50 bg-card/60 p-4 backdrop-blur"
                  >
                    <p className="mb-1 font-display text-xs font-semibold tracking-wider text-primary">
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
    </>
  );
};

export default NFTShowcaseSection;
