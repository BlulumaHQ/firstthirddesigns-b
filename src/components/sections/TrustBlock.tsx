import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    src: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
    alt: "Florist brand design project",
    label: "Florist Branding",
  },
  {
    src: "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
    alt: "Event space brand design project",
    label: "Event Space",
  },
  {
    src: "https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png",
    alt: "Brand design workspace",
    label: "Brand Identity",
  },
  {
    src: "https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png",
    alt: "Creative project showcase",
    label: "Creative Direction",
  },
];

const TrustBlock = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Proven Results
          </p>
          <h2 className="section-title text-foreground mb-4">
            Real Work. Real Impact.
          </h2>
          <p className="section-subtitle">
            A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <div key={project.label} className="group relative overflow-hidden rounded-lg aspect-[3/4]">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <p className="text-primary-foreground font-heading font-semibold text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
