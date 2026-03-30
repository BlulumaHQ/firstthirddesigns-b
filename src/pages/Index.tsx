import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const testimonials = [
  {
    quote: "They took my scattered ideas and turned them into a brand that finally feels like me. I cried happy tears when I saw it.",
    name: "Sarah M.",
    role: "Life Coach",
  },
  {
    quote: "Working with First & Third felt like catching up with friends who truly get your vision. My bookings doubled after launch.",
    name: "Jessica R.",
    role: "Event Planner",
  },
  {
    quote: "I went from DIY chaos to a professional brand in one week. Best investment I've made in my business.",
    name: "Amanda K.",
    role: "Creative Educator",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="First & Third Designs | Brand & Web Design for Women Entrepreneurs"
        description="We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with."
        path="/"
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://static.showit.co/1200/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg)`,
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(93,6%,45%,0.88), hsla(14,16%,60%,0.75))" }} />
        <div className="relative z-10 container-content px-5 md:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 mb-6 animate-fade-in">
              Brand & Web Design Studio
            </p>
            <h1 className="hero-title text-primary-foreground mb-6 animate-fade-in text-balance" style={{ animationDelay: "0.1s" }}>
              For Women Building The Life They Promised Themselves
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 font-body leading-relaxed max-w-xl mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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

      {/* PROBLEM → SOLUTION */}
      <section className="section-padding section-alt">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                It Takes Two To Make A Thing Go Right
              </p>
              <h2 className="section-title text-foreground mb-6">
                It's time for a new chapter in your business
              </h2>
              <p className="section-subtitle mb-8">
                One that brings more clarity, confidence, and a lot less guessing, overthinking, and trying to piece things together on your own.
              </p>
              <Link
                to="/service"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png"
                alt="Brand design workspace"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEY SERVICES */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Our Services
            </p>
            <h2 className="section-title text-foreground mb-4">
              Websites with Purpose
            </h2>
            <p className="section-subtitle">
              From branding foundations to full website launches — we create experiences that connect.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles size={28} />,
                title: "Branding",
                desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
                link: "/service",
              },
              {
                icon: <Heart size={28} />,
                title: "Website in a Week",
                desc: "A fully custom, website built and launched in a single day — without the overwhelm.",
                link: "/website-in-a-week",
              },
              {
                icon: <Users size={28} />,
                title: "Branding + Website",
                desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
                link: "/service",
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center text-primary mb-5">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                  {service.desc}
                </p>
                <span className="text-sm font-body font-semibold text-primary group-hover:gap-3 inline-flex items-center gap-1.5 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONIALS */}
      <section className="section-padding section-warm">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Cue the Happy Tears
            </p>
            <h2 className="section-title text-foreground mb-4">
              Our Clients Are Spilling the Tea
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-lg p-8 shadow-sm border border-border">
                <div className="flex gap-1 text-secondary mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-body text-foreground/80 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-body font-bold text-sm text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE VIBE WITH */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg"
                alt="Creative female entrepreneurs collaborating"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Click, Stay Awhile
              </p>
              <h2 className="section-title text-foreground mb-6">
                Who We Vibe With
              </h2>
              <p className="section-subtitle mb-6">
                Coaches, creatives, educators, service providers, unconventional business owners and those who get asked "so when are you getting a real job" by their mother-in-laws.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
                Our approach is simple: meaningful storytelling, thoughtful strategy, and a design experience that feels like catching up with old friends — real conversations, honest feedback, and a space where your vision actually gets to breathe.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Meet Your Designers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-3xl mx-auto">
          <h2 className="section-title text-background mb-6">
            Are you ready for your business to be fully booked, wildly profitable, and everything you always knew it could be?
          </h2>
          <p className="section-subtitle text-background/70 mb-10">
            We believe in you, now it's your turn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              Let's Do The Damn Thing <ArrowRight size={16} />
            </Link>
            <Link
              to="/service"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background/30 text-background font-body font-semibold text-sm rounded-md hover:bg-background/10 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
