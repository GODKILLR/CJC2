import cjcLogo from "@/assets/cjc-logo.png";

const footerLinks = [
  {
    title: "Game",
    links: ["Game Info", "Marketplace", "Download", "Roadmap"],
  },
  {
    title: "Resources",
    links: ["WhitePaper", "Documentation", "FAQs", "Support"],
  },
  {
    title: "Community",
    links: ["Discord", "Twitter / X", "Telegram", "YouTube"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={cjcLogo} alt="CJC Race" className="h-8 w-8" />
              <span className="font-display text-xl font-bold text-gradient-gold">CJC RACE</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              The ultimate blockchain horse racing experience. Own, breed, and race NFT horses.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-display text-sm font-semibold tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2024 CJC Race. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
