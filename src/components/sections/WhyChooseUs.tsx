import { Link } from "react-router-dom";
import { ArrowRight, Award, Eye, HeartHandshake, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: <Award size={24} />,
    title: "High-End Aesthetic",
    desc: "We create brands that look, feel, and function at a level that commands attention and trust.",
  },
  {
    icon: <Eye size={24} />,
    title: "Detail-Driven Execution",
    desc: "Every color, font, and layout choice is intentional — nothing is accidental.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Client-Focused Approach",
    desc: "A design experience that feels like catching up with old friends — real conversations, honest feedback.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Proven Results",
    desc: "Our clients see real growth — doubled bookings, increased confidence, and brands that finally feel like them.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <img
              src="https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg"
              alt="Creative female entrepreneurs collaborating"
              className="rounded-lg shadow-xl w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Why First & Third
            </p>
            <h2 className="section-title text-foreground mb-8">
              Two Sisters Designing for Women Who Are Done Dimming Their Light
            </h2>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Meet Your Designers <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
