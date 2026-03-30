import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTABlock = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-content text-center max-w-3xl mx-auto">
        <h2 className="section-title text-background mb-6">
          Are you ready for your business to be fully booked, wildly profitable, and everything you always knew it could be?
        </h2>
        <p className="section-subtitle text-background/70 mb-10">
          We believe in you, now it's your turn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing <ArrowRight size={16} />
          </Link>
          <Link
            to="/service"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-background/30 text-background font-body font-semibold text-sm rounded-md hover:bg-background/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
