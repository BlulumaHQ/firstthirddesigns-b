import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start with real conversations — learning your story, your vision, your goals, and what makes your business uniquely you.",
  },
  {
    number: "02",
    title: "Concept Development",
    desc: "We take everything we've learned and turn it into a clear creative direction — mood boards, brand strategy, and visual concepts.",
  },
  {
    number: "03",
    title: "Design Execution",
    desc: "This is where the magic happens. We build out your full brand identity and website with intention and precision.",
  },
  {
    number: "04",
    title: "Final Delivery",
    desc: "We hand over a polished, ready-to-launch brand and website — plus the confidence to show up and own it.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            How It Works
          </p>
          <h2 className="section-title text-foreground mb-4">
            Our Process
          </h2>
          <p className="section-subtitle">
            No perfection pressure. No jargon. Just work rooted in authenticity, community, and the life you're building on your own terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-6xl font-heading font-bold text-primary/15 leading-none">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Start Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
