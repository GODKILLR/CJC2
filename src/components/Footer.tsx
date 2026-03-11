import cjcLogo from "@/assets/cjc-logo.png";

const footerLinks = [
  {
    title: "Game",
    links: [
      { label: "Game Info", href: "https://www.cjcrace.io/gameinfo" },
      { label: "Marketplace", href: "https://market.cjcrace.io" },
      { label: "Download", href: "https://www.cjcrace.io/download" },
      { label: "WhitePaper", href: "https://docs.cjcrace.io/cjc-race-white-paper" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "Telegram", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "News & Updates", href: "https://www.cjcrace.io/news" },
      { label: "Documentation", href: "https://docs.cjcrace.io" },
      { label: "FAQs", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={cjcLogo} alt="CJC Race" className="h-8 w-8" />
              <span className="font-display text-xl font-bold text-gradient-gold">CJC RACE</span>
            </div>
            <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
              Climax Jockey Club — The ultimate blockchain horse racing experience.
              Own, race, and earn with NFT racehorses.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Play-to-Earn • Blockchain • NFTs
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-display text-sm font-semibold tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2024 Climax Jockey Club (CJC Race). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
