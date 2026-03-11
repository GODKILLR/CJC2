import { motion } from "framer-motion";
import nftPack from "@/assets/nft-pack.png";

const packs = [
  { name: "Starter Pack", tier: "01", desc: "Perfect for beginners. Includes a basic racehorse and jockey NFT.", price: "0.05 ETH" },
  { name: "Balance Pack", tier: "02", desc: "A balanced set with mid-tier horse, jockey, and racing gear.", price: "0.15 ETH" },
  { name: "All-In-One Pack", tier: "03", desc: "Premium collection with rare bloodline horse, elite jockey, and exclusive items.", price: "0.35 ETH" },
];

const NFTPacksSection = () => {
  return (
    <section className="section-padding bg-surface-elevated">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-primary">
            GET STARTED
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            <span className="text-gradient-gold">NFT Packs</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/40 hover:glow-gold"
            >
              <span className="absolute right-4 top-4 font-display text-5xl font-bold text-muted/50">
                {pack.tier}
              </span>
              <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center">
                <img
                  src={nftPack}
                  alt={pack.name}
                  className="h-full w-full object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
                {pack.name}
              </h3>
              <p className="mb-6 font-body text-sm text-muted-foreground">
                {pack.desc}
              </p>
              <p className="font-display text-xl font-bold text-primary">
                {pack.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTPacksSection;
