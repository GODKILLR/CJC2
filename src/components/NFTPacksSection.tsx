import { motion } from "framer-motion";
import nftPack from "@/assets/nft-pack.png";
import { Button } from "@/components/ui/button";

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
    <section id="packs" className="section-padding bg-surface-elevated">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="text-xl">⭐</span>
          <span className="font-body text-xs tracking-[0.2em] text-primary">
            GET STARTED
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-display text-4xl font-bold md:text-5xl"
        >
          <span className="text-gradient-gold">NFT Mystery Boxes</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl font-body text-base text-muted-foreground"
        >
          Each NFT package includes Tycoon Club membership for earning opportunities
          including static development and referral bonuses. NFT rarity ranges from N to LR.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packs.map((pack, i) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:glow-gold ${
                pack.featured
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {pack.featured && (
                <span className="absolute right-3 top-3 rounded-full bg-gradient-gold px-3 py-1 font-display text-[10px] font-bold tracking-wider text-primary-foreground">
                  POPULAR
                </span>
              )}

              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
                <img
                  src={nftPack}
                  alt={pack.name}
                  className="h-full w-full object-contain transition-transform group-hover:scale-110"
                />
              </div>

              <h3 className="mb-1 font-display text-lg font-bold text-foreground">
                {pack.name}
              </h3>
              <p className="mb-4 font-display text-2xl font-bold text-primary">
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

              <Button
                variant={pack.featured ? "hero" : "heroOutline"}
                className="w-full"
                size="sm"
              >
                Get Pack
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Rarity table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-xl border border-border"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="px-4 py-3 font-display text-xs tracking-wider text-primary">Rarity</th>
                <th className="px-4 py-3 font-display text-xs tracking-wider text-primary">Probability</th>
                <th className="hidden px-4 py-3 font-display text-xs tracking-wider text-primary md:table-cell">Horses</th>
                <th className="hidden px-4 py-3 font-display text-xs tracking-wider text-primary md:table-cell">Jockeys</th>
                <th className="hidden px-4 py-3 font-display text-xs tracking-wider text-primary md:table-cell">Items</th>
              </tr>
            </thead>
            <tbody>
              {[
                { rarity: "N", prob: "40%", h: "2,000", j: "2,000", it: "2,000" },
                { rarity: "R", prob: "28%", h: "1,400", j: "1,400", it: "1,400" },
                { rarity: "SR", prob: "18%", h: "900", j: "900", it: "900" },
                { rarity: "SSR", prob: "9%", h: "450", j: "450", it: "450" },
                { rarity: "UR", prob: "4.5%", h: "225", j: "225", it: "225" },
                { rarity: "LR", prob: "0.5%", h: "25", j: "25", it: "25" },
              ].map((row) => (
                <tr key={row.rarity} className="border-b border-border/50 last:border-0">
                  <td className="px-4 py-2.5 font-display text-sm font-semibold text-foreground">{row.rarity}</td>
                  <td className="px-4 py-2.5 font-body text-sm text-muted-foreground">{row.prob}</td>
                  <td className="hidden px-4 py-2.5 font-body text-sm text-muted-foreground md:table-cell">{row.h}</td>
                  <td className="hidden px-4 py-2.5 font-body text-sm text-muted-foreground md:table-cell">{row.j}</td>
                  <td className="hidden px-4 py-2.5 font-body text-sm text-muted-foreground md:table-cell">{row.it}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default NFTPacksSection;
