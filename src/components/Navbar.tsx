import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import cjcLogo from "@/assets/cjc-logo.png";

const navLinks = [
  {
    label: "Game",
    href: "#about",
    children: [
      { label: "About", href: "#about" },
      { label: "Game Modes", href: "#modes" },
      { label: "Features", href: "#features" },
    ],
  },
  { label: "NFTs", href: "#nfts" },
  { label: "Packs", href: "#packs" },
  { label: "Marketplace", href: "https://market.cjcrace.io" },
  { label: "Community", href: "#community" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={cjcLogo} alt="CJC Race" className="h-9 w-9" />
          <span className="font-display text-xl font-bold text-gradient-gold">CJC RACE</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 rounded-lg px-4 py-2 font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </a>

              {/* Dropdown */}
              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full mt-1 min-w-[180px] rounded-xl border border-border/50 bg-card/95 p-2 shadow-2xl backdrop-blur-xl">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg px-4 py-2 font-body text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.cjcrace.io/download"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-primary/40 bg-primary/10 px-5 py-2 font-display text-sm font-semibold tracking-wider text-primary transition-all hover:bg-primary/20 hover:glow-gold"
          >
            Download Game
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/30 bg-background/95 px-6 pb-6 backdrop-blur-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                className="block py-3 font-body text-sm text-muted-foreground hover:text-primary"
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.children?.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block py-2 pl-4 font-body text-xs text-muted-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
          <a
            href="https://www.cjcrace.io/download"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-center font-display text-sm font-semibold tracking-wider text-primary"
          >
            Download Game
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
