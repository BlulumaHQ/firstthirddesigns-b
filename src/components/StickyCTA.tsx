import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: fixed right-side button */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-3.5 bg-foreground text-background text-sm font-body font-bold rounded-l-lg shadow-lg hover:opacity-90 transition-all origin-right"
          style={{ writingMode: "horizontal-tb" }}
        >
          Schedule a Call <ArrowRight size={16} />
        </Link>
      </div>

      {/* Mobile: sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-foreground/95 backdrop-blur-md border-t border-background/10 px-5 py-3">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md"
        >
          Schedule a Call <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
};

export default StickyCTA;
