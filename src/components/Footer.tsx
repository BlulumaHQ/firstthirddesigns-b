import { Link } from "react-router-dom";

const footerNavLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { label: "Branding", to: "/service" },
  { label: "Website in a Week", to: "/website-in-a-week" },
  { label: "Website in a Day", to: "/website-in-a-day" },
  { label: "Branding + Website", to: "/service" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-content section-padding">
        {/* Desktop 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Column 1: Logo & description */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-4 text-background">
              First & Third Designs
            </h3>
            <p className="text-sm leading-relaxed opacity-70 font-body">
              We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with.
            </p>
          </div>

          {/* Column 2: Empty spacer */}
          <div className="hidden lg:block" aria-hidden="true" />

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              Services
            </h4>
            <nav className="flex flex-col gap-2.5">
              {serviceLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="text-sm font-body opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-body opacity-60">
              <p>Follow @firstandthirddesigns</p>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">
                Send us a message →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-background/10">
        <div className="container-content px-5 md:px-8 py-6">
          <p className="text-xs font-body opacity-50 text-center md:text-left">
            © {currentYear} First & Third Designs. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity underline"
            >
              Bluluma
            </a>
          {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of First Third Designs.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
