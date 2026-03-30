import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About"
        description="Two sisters designing for women who are done dimming their light. Meet the designers behind First & Third Designs."
        path="/about"
      />

      {/* Hero */}
      <section className="section-padding section-alt">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Meet Your Designers
              </p>
              <h1 className="hero-title text-foreground mb-6 text-balance">
                Two Sisters Designing for Women Who Are Done Dimming Their Light
              </h1>
              <p className="section-subtitle mb-8">
                Our approach is simple: meaningful storytelling, thoughtful strategy, and a design experience that feels like catching up with old friends — real conversations, honest feedback, and a space where your vision actually gets to breathe.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Schedule a Call <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <img
                src="https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg"
                alt="First and Third Designs founders"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title text-foreground mb-4">Real Talk</h2>
            <p className="section-subtitle">
              No perfection pressure. No jargon. Just work rooted in authenticity, community, and the life you're building on your own terms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Create", desc: "We craft brands and websites that tell your story with intention and impact." },
              { title: "Empower", desc: "We design so you can show up with confidence and clarity in every corner of your business." },
              { title: "Connect", desc: "We build experiences that create real, lasting connections between you and your people." },
            ].map((v) => (
              <div key={v.title} className="text-center p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{v.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faking it together */}
      <section className="section-padding section-warm">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png"
                alt="Behind the scenes at First & Third Designs"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="section-title text-foreground mb-6">Faking It Till We Make It, Together</h2>
              <p className="section-subtitle mb-6">
                We believe in showing up — even when it's messy, even when the plan changes, even when imposter syndrome is loud. We build alongside you because we've been there too.
              </p>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
                We believe in you, now it's your turn.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                We Dare You to Invest in Yourself <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
