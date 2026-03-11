import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-surface-elevated">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-display text-sm tracking-[0.3em] text-primary">
            JOIN THE COMMUNITY
          </p>
          <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">
            <span className="text-gradient-gold">The Race Never Stops</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            Join thousands of players worldwide. Stay updated with the latest news,
            tournaments, and community events. Build your stable and rise to the top.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="px-10 py-6 text-base">
              Join Discord
            </Button>
            <Button variant="heroOutline" size="lg" className="px-10 py-6 text-base">
              Follow on X
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "50K+", label: "Players" },
              { value: "1M+", label: "Races Completed" },
              { value: "100K+", label: "NFTs Minted" },
              { value: "10K+", label: "Daily Races" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
