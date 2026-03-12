import CinematicSection from "./CinematicSection";
import { motion } from "framer-motion";
import sectionMarketplace from "@/assets/section-marketplace.jpg";
import nftPack from "@/assets/nft-pack.png";

const packs = [
  {
    name: "Basic Pack",
    price: "$179",
    contents: ["1× Random Horse, Jockey, or Item", "30 Days Tycoon Club"],
    remark: "",
  },
  {
    name: "Welcome Pack",
    price: "$340",
    contents: ["1× Random Horse", "1× Random Jockey", "60 Days Tycoon Club"],
    remark: "One-time Purchase Only",
  },
  {
    name: "Starter Pack",
    price: "$500",
    contents: ["1× Random Horse", "1× Random Jockey", "1× Random Item", "90 Days Tycoon Club"],
    remark: "",
  },
  {
    name: "Prime Pack",
    price: "$1,800",
    contents: ["4× Horses", "4× Jockeys", "4× Items", "360 Days Tycoon Club"],
    remark: "At least 1 SSR rarity • Most Popular",
    featured: true,
  },
];

const NFTPacksSection = () => {
  return (
    <>
      <CinematicSection
        id="packs"
        label="MARKETPLACE"
        title="NFT Mystery Boxes"
        description="Each NFT package includes Tycoon Club membership for earning opportunities including static development and referral bonuses. NFT rarity ranges from N to LR."
        image={sectionMarketplace}
        cta={{ label: "Visit Marketplace", href: "https://market.cjcrace.io" }}
        align="left"
      />

      {/* Pack cards */}
      <section className="bg-surface-elevated px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur transition-all hover:glow-gold ${
                pack.featured
                  ? "border-primary/40 bg-primary/5"
                  : "border-border/50 bg-card/40"
              }`}
            >
              {pack.featured && (
                <span className="absolute right-3 top-3 rounded-full bg-gradient-gold px-3 py-1 font-display text-[10px] font-bold tracking-wider text-primary-foreground">
                  POPULAR
                </span>
              )}

              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                <img
                  src={nftPack}
                  alt={pack.name}
                  className="h-full w-full object-contain transition-transform group-hover:scale-110"
                />
              </div>

              <h3 className="mb-1 font-display text-base font-bold tracking-wider text-foreground">
                {pack.name}
              </h3>
              <p className="mb-4 font-display text-xl font-bold text-primary">
                {pack.price}
              </p>

              <ul className="mb-6 flex-1 space-y-2">
                {pack.contents.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-xs text-muted-foreground">
                    <span className="mt-0.5 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {pack.remark && (
                <p className="mb-4 font-body text-[10px] italic text-primary/70">
                  {pack.remark}
                </p>
              )}

              <a
                href="https://market.cjcrace.io"
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-xl border px-4 py-2.5 text-center font-display text-xs font-semibold tracking-wider transition-all ${
                  pack.featured
                    ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                    : "border-border/50 text-foreground hover:border-primary/30"
                }`}
              >
                Get Pack
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NFTPacksSection;
