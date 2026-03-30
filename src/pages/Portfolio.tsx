import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const portfolioItems = [
  {
    image: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
    title: "The Flourish Studio",
    category: "Branding + Website",
  },
  {
    image: "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
    title: "Gather & Glow Events",
    category: "Website Design",
  },
  {
    image: "https://static.showit.co/400/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
    title: "Brand Identity Refresh",
    category: "Branding",
  },
  {
    image: "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
    title: "Creative Coaching Brand",
    category: "Branding + Website",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <SEOHead
        title="Portfolio"
        description="A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand."
        path="/portfolio"
      />

      {/* Hero */}
      <section className="section-padding section-alt">
        <div className="container-content text-center max-w-3xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Our Work
          </p>
          <h1 className="hero-title text-foreground mb-6">Websites with Purpose</h1>
          <p className="section-subtitle">
            A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, i) => (
              <div key={i} className="group overflow-hidden rounded-lg border border-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-body font-semibold uppercase tracking-wider text-secondary">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-background mb-6">Ready to Be Next?</h2>
          <p className="text-lg font-body text-background/70 mb-10">
            Let's create something that makes you proud to share your link.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Make It Happen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
