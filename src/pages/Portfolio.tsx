import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { projects } from "@/data/projects";

const Portfolio = () => {
  return (
    <Layout>
      <SEOHead
        title="Portfolio | First & Third Designs"
        description="From Struggle to Solution — every brand has a story. Explore real projects where frustration turned into function, and ideas became reality."
        path="/portfolio"
      />

      {/* Hero */}
      <section className="section-padding section-alt">
        <div className="container-content text-center max-w-3xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Our Work
          </p>
          <h1 className="hero-title text-foreground mb-6">
            From Struggle to Solution
          </h1>
          <p className="section-subtitle italic">
            Every brand has a story — this is where frustration turned into
            function, and ideas became reality.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 md:py-24 px-5 md:px-8">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-5">
                  <img
                    src={project.cover}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-secondary block mb-1">
                      {project.category}
                    </span>
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-secondary transition-colors duration-300">
                      {project.name}
                    </h2>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-background mb-4">
            Ready to see your brand here?
          </h2>
          <p className="text-lg font-body text-background/70 mb-10">
            Let's create something that makes you proud to share your link.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
