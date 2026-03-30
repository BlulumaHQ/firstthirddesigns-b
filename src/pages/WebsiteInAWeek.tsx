import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const WebsiteInAWeek = () => {
  return (
    <Layout>
      <SEOHead
        title="Website in a Week"
        description="A fully custom website built and launched in a single week — without the overwhelm. Perfect for entrepreneurs ready to level up."
        path="/website-in-a-week"
      />

      {/* Hero */}
      <section className="relative section-padding bg-foreground text-background">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Website in a Week
            </p>
            <h1 className="hero-title text-background mb-6">
              Your Dream Website, Launched in 7 Days
            </h1>
            <p className="text-lg md:text-xl font-body text-background/75 leading-relaxed mb-10">
              A fully custom, website built and launched in a single week — without the overwhelm.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              Schedule a Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="section-title text-foreground mb-6">What's Included</h2>
              <div className="space-y-4">
                {[
                  "Custom website design tailored to your brand",
                  "Mobile-responsive across all devices",
                  "SEO-optimized pages for visibility",
                  "Contact form integration",
                  "Launch support and handoff",
                  "Strategy session to align on your vision",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm font-body text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png"
                alt="Website in a Week example"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-warm">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-foreground mb-6">Ready to Launch?</h2>
          <p className="section-subtitle mb-10">
            Stop waiting for the perfect moment. Let's build something you're proud of — this week.
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

export default WebsiteInAWeek;
