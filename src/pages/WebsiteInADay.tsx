import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const WebsiteInADay = () => {
  return (
    <Layout>
      <SEOHead
        title="Website in a Day"
        description="Get a fully custom website designed and launched in a single day. Fast, focused, and built for impact."
        path="/website-in-a-day"
      />

      {/* Hero */}
      <section className="relative section-padding bg-foreground text-background">
        <div className="container-content">
          <div className="max-w-3xl">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              <Zap size={14} className="inline mr-1" />
              Website in a Day
            </p>
            <h1 className="hero-title text-background mb-6">
              From Vision to Launch — In One Day
            </h1>
            <p className="text-lg md:text-xl font-body text-background/75 leading-relaxed mb-10">
              A fully custom, website built and launched in a single day — without the overwhelm. Perfect for entrepreneurs who are ready now.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              Book Your Day <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title text-foreground mb-4">How It Works</h2>
            <p className="section-subtitle">One day. Full focus. A website you love.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "Morning", title: "Strategy & Design", desc: "We kick off with a focused strategy session, then dive into design." },
              { step: "Afternoon", title: "Build & Refine", desc: "Your website comes to life with real-time feedback and refinements." },
              { step: "Evening", title: "Launch", desc: "We finalize everything and launch your brand new website to the world." },
            ].map((p) => (
              <div key={p.step} className="bg-card border border-border rounded-lg p-8 text-center">
                <span className="text-sm font-body font-semibold uppercase tracking-wider text-secondary">{p.step}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mt-3 mb-3">{p.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding section-alt">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png"
                alt="Website in a Day result"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="section-title text-foreground mb-6">What You Get</h2>
              <div className="space-y-4">
                {[
                  "Up to 5 custom-designed pages",
                  "Mobile-responsive design",
                  "Contact form setup",
                  "Basic SEO optimization",
                  "Same-day launch",
                  "Post-launch support",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm font-body text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-background mb-6">Stop Waiting. Start Launching.</h2>
          <p className="text-lg font-body text-background/70 mb-10">
            We dare you to invest in yourself.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Schedule a Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WebsiteInADay;
