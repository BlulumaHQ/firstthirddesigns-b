import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) return <Navigate to="/portfolio" replace />;

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <Layout>
      <SEOHead
        title={`${project.name} | First & Third Designs`}
        description={project.solution.slice(0, 155)}
        path={`/portfolio/${project.slug}`}
      />

      {/* Back link */}
      <div className="container-content pt-8 pb-4 px-5 md:px-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-body font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Back to Portfolio
        </Link>
      </div>

      {/* Hero Image */}
      <section className="px-5 md:px-8 pb-12">
        <div className="container-content">
          <div className="aspect-[16/9] overflow-hidden rounded-lg">
            <img
              src={project.cover}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <div className="container-content max-w-3xl">
          <span className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-secondary block mb-3">
            {project.category}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            {project.name}
          </h1>
          <p className="font-heading text-xl md:text-2xl italic text-foreground/80 mb-8 leading-snug">
            "{project.struggle}"
          </p>
          <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-5 md:px-8 pb-16 md:pb-24">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.images.map((img, j) => (
              <div
                key={j}
                className={`overflow-hidden rounded-lg ${
                  j === 0 && project.images.length % 2 !== 0
                    ? "md:col-span-2 aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.name} — detail ${j + 1}`}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="section-padding border-t border-border">
        <div className="container-content text-center">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Next Project
          </p>
          <Link
            to={`/portfolio/${nextProject.slug}`}
            className="group inline-block"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground group-hover:text-secondary transition-colors duration-300 mb-2">
              {nextProject.name}
            </h2>
            <span className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground group-hover:text-secondary transition-colors">
              View Project <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-background mb-4">
            Love what you see?
          </h2>
          <p className="text-lg font-body text-background/70 mb-10">
            Let's create something that makes you proud to share your link.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
