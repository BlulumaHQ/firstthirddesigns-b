import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Users, Palette } from "lucide-react";

const services = [
  {
    icon: <Sparkles size={28} />,
    title: "Branding",
    desc: "You're starting from scratch or your current brand hasn't kept up with the business you've built. Time to fix that.",
    link: "/service",
  },
  {
    icon: <Heart size={28} />,
    title: "Website in a Week",
    desc: "A fully custom website built and launched in a single week — without the overwhelm.",
    link: "/website-in-a-week",
  },
  {
    icon: <Palette size={28} />,
    title: "Website in a Day",
    desc: "A fully custom, website built and launched in a single day — without the overwhelm.",
    link: "/website-in-a-day",
  },
  {
    icon: <Users size={28} />,
    title: "Branding + Website",
    desc: "A start-to-finish brand and website experience designed to support growth and credibility.",
    link: "/service",
  },
];

const ServicesSection = () => {
  return (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
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

        <div className="text-center mt-12">
          <Link
            to="/service"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
