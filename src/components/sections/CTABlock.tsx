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
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
        >
          Let's Do The Damn Thing <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CTABlock;
