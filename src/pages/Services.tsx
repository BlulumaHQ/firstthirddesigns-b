import { Link } from "react-router-dom";
import { ArrowRight, Palette, Globe, Layers } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const services = [
  {
    icon: <Palette size={32} />,
    title: "Branding",
    desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
    link: "/service",
  },
  {
    icon: <Globe size={32} />,
    title: "Website in a Week",
    desc: "A fully custom, website built and launched in a single day — without the overwhelm.",
    link: "/website-in-a-week",
  },
  {
    icon: <Layers size={32} />,
    title: "Branding + Website",
    desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
    link: "/service",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Services"
        description="Brand & web design services for female entrepreneurs. Branding, Website in a Week, and full Branding + Website packages."
        path="/service"
      />

      {/* Hero */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-3xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Brand & Web Design
          </p>
          <h1 className="hero-title text-background mb-6">Do It for Her</h1>
          <p className="text-lg md:text-xl font-body text-background/75 leading-relaxed mb-10">
            It's time for a new chapter in your business — one that brings more clarity, confidence, and a lot less guessing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Schedule a Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-lg p-8 flex flex-col">
                <div className="w-14 h-14 rounded-md bg-muted flex items-center justify-center text-primary mb-6">
                  {s.icon}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{s.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-6 flex-1">{s.desc}</p>
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding section-alt">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title text-foreground mb-4">Smarter Not Harder</h2>
            <p className="section-subtitle">Our process is designed to get you results without the overwhelm.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We get to know you, your business, and your vision." },
              { step: "02", title: "Strategy", desc: "We map out the plan that aligns with your goals." },
              { step: "03", title: "Design", desc: "We craft your brand and website with intention." },
              { step: "04", title: "Launch", desc: "We bring it all to life and hand you the keys." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <span className="text-4xl font-heading font-bold text-secondary/40">{p.step}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-3 mb-2">{p.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-warm">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-foreground mb-6">You Got This</h2>
          <p className="section-subtitle mb-10">
            Are you ready for your business to be fully booked, wildly profitable, and everything you always knew it could be?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
