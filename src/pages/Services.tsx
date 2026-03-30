import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, Heart, CheckCircle, ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Services"
        description="Premium brand & web design services for female entrepreneurs. Website in a Day, Website in a Week, and full Branding + Website packages."
        path="/service"
      />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 container-content w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.2em] text-secondary mb-6">
              Brand & Web Design for Women Who Mean Business
            </p>
            <h1 className="hero-title text-background mb-8">
              Your Vision Deserves
              <br />
              <span className="italic font-normal">More Than a Template</span>
            </h1>
            <p className="text-lg md:text-xl font-body text-background/80 leading-relaxed max-w-lg mb-10">
              Strategic, high-touch brand and website design — built with
              intention, launched with confidence, and designed to grow with you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SERVICE PATHWAY INTRO */}
      <section id="pathways" className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Your Stage. Your Service.
            </p>
            <h2 className="section-title text-foreground mb-6">
              Three Pathways, One Goal:
              <br />
              <span className="italic font-normal">A Business That Looks as Good as It Is</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're just getting started, ready for a refresh, or building a brand from the ground up — 
              there's a service designed to meet you exactly where you are. No cookie-cutter packages. 
              No one-size-fits-all. Just strategic, beautiful design tailored to your next chapter.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICE BLOCK 1: Website in a Day */}
      <section className="section-padding section-warm">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <Clock size={20} className="text-secondary" />
                <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary">
                  Fast-Track
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 leading-tight">
                Website in a Day
              </h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                A fully custom website built and launched in a single day — without the overwhelm. 
                Perfect for the entrepreneur who knows what she wants and is ready to go live <em>yesterday</em>.
              </p>

              <div className="mb-6">
                <p className="text-sm font-body font-semibold text-foreground mb-1">Best for:</p>
                <p className="text-sm font-body text-muted-foreground">
                  Coaches, consultants, and service providers who need a polished online presence — fast.
                </p>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-sm font-body font-semibold text-foreground mb-3">What's included:</p>
                {[
                  "Up to 5 custom-designed pages",
                  "Mobile-responsive design",
                  "Strategic layout & content placement",
                  "Contact form integration",
                  "Same-day launch",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">Timeline:</span>
                <span className="text-sm font-body font-semibold text-foreground">1 Day</span>
              </div>

              <Link
                to="/website-in-a-day"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png"
                  alt="Website in a Day project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICE BLOCK 2: Website in a Week */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg"
                  alt="Website in a Week project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Sparkles size={20} className="text-secondary" />
                <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary">
                  Signature
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 leading-tight">
                Website in a Week
              </h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                A fully custom website built and launched in a single week — with strategy, 
                intention, and room to breathe. This is for the woman who wants more than a 
                pretty site. She wants one that <em>works</em>.
              </p>

              <div className="mb-6">
                <p className="text-sm font-body font-semibold text-foreground mb-1">Best for:</p>
                <p className="text-sm font-body text-muted-foreground">
                  Entrepreneurs ready to level up with a strategic, conversion-focused website that reflects where they're headed.
                </p>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-sm font-body font-semibold text-foreground mb-3">What's included:</p>
                {[
                  "Up to 7 custom-designed pages",
                  "Brand-aligned visual direction",
                  "SEO foundations & content strategy",
                  "Mobile-responsive design",
                  "Two rounds of revisions",
                  "Launch-ready in 5 business days",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">Timeline:</span>
                <span className="text-sm font-body font-semibold text-foreground">5 Business Days</span>
              </div>

              <Link
                to="/website-in-a-week"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICE BLOCK 3: Branding + Website */}
      <section className="section-padding section-alt">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <Heart size={20} className="text-secondary" />
                <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-secondary">
                  Full Experience
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 leading-tight">
                Branding + Website
              </h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-6">
                A start-to-finish brand and website experience designed to support growth and credibility. 
                This is the full transformation — from your brand story to your digital home.
              </p>

              <div className="mb-6">
                <p className="text-sm font-body font-semibold text-foreground mb-1">Best for:</p>
                <p className="text-sm font-body text-muted-foreground">
                  Women starting fresh or pivoting — who want every piece of their brand to feel cohesive, intentional, and unapologetically them.
                </p>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-sm font-body font-semibold text-foreground mb-3">What's included:</p>
                {[
                  "Complete brand identity (logo, palette, typography)",
                  "Brand strategy & messaging framework",
                  "Custom website design (up to 10 pages)",
                  "Content guidance & copywriting support",
                  "Mobile-responsive, SEO-ready build",
                  "Brand style guide for consistency",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-muted-foreground">Timeline:</span>
                <span className="text-sm font-body font-semibold text-foreground">3–4 Weeks</span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Inquire Now <ArrowRight size={16} />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg"
                  alt="Branding and Website project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 md:py-20 px-5 md:px-8 bg-foreground">
        <div className="container-content text-center max-w-2xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Not Sure Where to Start?
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-background mb-6 leading-tight">
            Let's figure it out — together.
          </h2>
          <p className="text-base font-body text-background/70 leading-relaxed mb-8">
            Book a free discovery call and we'll help you choose the service pathway that fits your goals, your timeline, and your budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Schedule a Call <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* SECTION 4 — WHY THIS WORKS */}
      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Why It Works
            </p>
            <h2 className="section-title text-foreground mb-6">
              Speed With Intention,
              <br />
              <span className="italic font-normal">Not Shortcuts</span>
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              We don't do rushed. We do strategic. Every project moves fast because 
              we've refined a process that eliminates the back-and-forth without sacrificing quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Strategy Before Visuals",
                desc: "We start with your goals, your audience, and your message — so every design decision has purpose.",
              },
              {
                title: "Done-for-You Execution",
                desc: "You share the vision. We handle the rest. No DIY templates, no guesswork, no overwhelm.",
              },
              {
                title: "Stress-Free Experience",
                desc: "Clear timelines, honest communication, and a process that actually feels good — like catching up with old friends.",
              },
              {
                title: "Built for Growth",
                desc: "Your brand and website aren't just beautiful — they're built to attract, convert, and scale with you.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center lg:text-left">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHAT TO EXPECT (Process) */}
      <section className="section-padding section-warm">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              The Experience
            </p>
            <h2 className="section-title text-foreground mb-6">
              Smarter, Not Harder
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              From first hello to launch day — here's how we take you from overwhelmed to fully online.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6 md:gap-4">
              {[
                { step: "01", title: "Apply", desc: "Tell us about your business, your vision, and where you're headed." },
                { step: "02", title: "Prep", desc: "We guide you through gathering content, images, and brand direction." },
                { step: "03", title: "Strategy", desc: "We map out the plan that aligns with your goals and audience." },
                { step: "04", title: "Design + Build", desc: "We craft your brand and website with intention and precision." },
                { step: "05", title: "Launch", desc: "We bring it all to life, hand you the keys, and celebrate." },
              ].map((p) => (
                <div key={p.step} className="text-center">
                  <span className="inline-block text-3xl font-heading font-bold text-secondary/30 mb-2">
                    {p.step}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Common Questions
              </p>
              <h2 className="section-title text-foreground mb-6">
                Real Talk
              </h2>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-8">
                We know investing in your brand is a big deal. Here are the answers to the questions 
                we hear most — so you can feel confident moving forward.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary hover:gap-3 transition-all"
              >
                Still have questions? Let's chat <ArrowRight size={14} />
              </Link>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1" className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    Which service is right for me?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed pb-5">
                    It depends on where you are in your business. If you have your branding dialed in and just need a site — 
                    Website in a Day or Week is your move. If you're building from scratch or need a full refresh, 
                    Branding + Website gives you the complete foundation. Not sure? Book a call and we'll figure it out together.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q2" className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    What do I need to have ready before we start?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed pb-5">
                    We'll send you a prep guide after booking so you know exactly what to gather — things like your 
                    content, photos, brand assets, and login info. No scrambling, no guesswork.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q3" className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    Can I add pages later?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed pb-5">
                    Absolutely. Your site is built to grow with you. We can always add pages, sections, or 
                    features down the road as your business evolves.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q4" className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    Do you help with copywriting?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed pb-5">
                    We provide content guidance and strategic direction for your messaging. For the Branding + Website 
                    package, we include deeper copywriting support to make sure your words land as powerfully as your visuals.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="q5" className="border-border">
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    What makes this different from a typical custom website process?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed pb-5">
                    Speed, strategy, and soul. Most agencies take months. We take days or weeks — without cutting corners. 
                    Our process is refined so you get high-quality, conversion-ready design in a fraction of the time, 
                    with an experience that actually feels good.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png')",
          }}
        />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative z-10 container-content text-center max-w-2xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-6">
            We Dare You
          </p>
          <h2 className="section-title text-background mb-6">
            Invest in the Business
            <br />
            <span className="italic font-normal">You Promised Yourself</span>
          </h2>
          <p className="text-lg font-body text-background/75 leading-relaxed mb-10 max-w-lg mx-auto">
            Are you ready for your business to be fully booked, wildly profitable, 
            and everything you always knew it could be? We believe in you — now it's your turn.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
