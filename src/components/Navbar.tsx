import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import cjcLogo from "@/assets/cjc-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "NFTs", href: "#nfts" },
  { label: "Game Modes", href: "#modes" },
  { label: "Features", href: "#features" },
  { label: "Packs", href: "#packs" },
  { label: "Marketplace", href: "https://market.cjcrace.io" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={cjcLogo} alt="CJC Race" className="h-10 w-10" />
          <span className="font-display text-2xl font-bold text-gradient-gold">CJC RACE</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a href="https://www.cjcrace.io/download" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default">
              Download Game
            </Button>
          </a>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background px-6 pb-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 font-body text-sm text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="https://www.cjcrace.io/download" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="mt-4 w-full">
              Download Game
            </Button>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
