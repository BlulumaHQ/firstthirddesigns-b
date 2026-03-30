import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://static.showit.co/1200/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsla(93,6%,45%,0.88), hsla(14,16%,60%,0.75))" }}
      />
      <div className="relative z-10 container-content px-5 md:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 mb-6 animate-fade-in">
            Brand & Web Design Studio
          </p>
          <h1
            className="hero-title text-primary-foreground mb-6 animate-fade-in text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            For Women Building The Life They Promised Themselves
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              Let's Make It Happen <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
