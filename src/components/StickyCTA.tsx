import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const StickyCTA = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-body font-semibold rounded-full shadow-lg hover:opacity-90 transition-all"
    >
      <MessageCircle size={16} />
      <span className="hidden sm:inline">Let's Talk</span>
    </Link>
  );
};

export default StickyCTA;
