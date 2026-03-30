import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/service" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-content flex items-center justify-between px-5 md:px-8" style={{ height: "80px" }}>
        <Link to="/" className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight">
          First & Third Designs
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col py-6 px-5 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`py-3 text-base font-body font-semibold transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 text-center px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
