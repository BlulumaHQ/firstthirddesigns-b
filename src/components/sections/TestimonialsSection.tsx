const testimonials = [
  {
    quote: "They took my scattered ideas and turned them into a brand that finally feels like me. I cried happy tears when I saw it.",
    name: "Sarah M.",
    role: "Life Coach",
  },
  {
    quote: "Working with First & Third felt like catching up with friends who truly get your vision. My bookings doubled after launch.",
    name: "Jessica R.",
    role: "Event Planner",
  },
  {
    quote: "I went from DIY chaos to a professional brand in one week. Best investment I've made in my business.",
    name: "Amanda K.",
    role: "Creative Educator",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding section-warm">
      <div className="container-content">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Cue the Happy Tears
          </p>
          <h2 className="section-title text-foreground mb-4">
            Our Clients Are Spilling the Tea
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-lg p-8 shadow-sm border border-border">
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-body text-foreground/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-bold text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
