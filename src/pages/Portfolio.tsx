import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const projects = [
  {
    name: "DripNeedle Med Spa",
    category: "Branding + Website",
    struggle: "Can my website feel like my in-person experience?",
    solution:
      "By building a brand experience, not just a website. We elevated her visual design, restructured her service flow, and spotlighted her expertise to create a digital presence that feels premium, professional, and unmistakably DripNeedle.",
    cover: "https://static.showit.co/800/FCEBECixG_oi_9Es4VArjA/235620/20.png",
    images: [
      "https://static.showit.co/800/fG4m4xKxTJAPV1rx4ZMn4Q/235620/mock_ups.png",
      "https://static.showit.co/800/n6H7Rj05r5Z0700SG0gu0A/235620/21.png",
    ],
  },
  {
    name: "Klover Beauty",
    category: "Website Design",
    struggle: "I have the vision — now how do I make it real?",
    solution:
      "Klover had the colors, vibe, and vision—but needed help pulling it all together. We created a beauty brand website design that turned her inspiration into a cohesive, elevated, and functional site that finally brings her fairytale vision to life.",
    cover: "https://static.showit.co/400/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
    images: [
      "https://static.showit.co/400/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
      "https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png",
    ],
  },
  {
    name: "Cait Designs",
    category: "Branding + Website",
    struggle: "How do I make time for my own website?",
    solution:
      "Like many creatives, Cait was so focused on her clients that her own site sat unfinished. We designed a Showit website that showcases her portfolio, organizes her services, and captures her artistic personality — a polished site that finally feels like the creative home her brand deserves.",
    cover: "https://static.showit.co/400/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
    images: [
      "https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png",
      "https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
    ],
  },
  {
    name: "KC Childcare",
    category: "Website Design",
    struggle: "How do I launch my first website?",
    solution:
      "As a new business, KC Childcare needed a first website that struck the balance between professional and playful. We designed a family-friendly site with clear program details, welcoming visuals, and local SEO to help parents find and trust them.",
    cover: "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
    images: [
      "https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
      "https://static.showit.co/200/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg",
    ],
  },
  {
    name: "Chestertown Farmers Market",
    category: "Website Redesign",
    struggle: "How do we get more traffic?",
    solution:
      "Their old website wasn't pulling in visitors the way the Saturday market does. We built a refreshed nonprofit website design with vendor highlights, event updates, and a newsletter signup to bring more eyes and feet to the market.",
    cover: "https://static.showit.co/1200/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg",
    images: [
      "https://static.showit.co/302/LoFiTsodnzp9s0IsUTbwlA/235620/as1a1870.jpg",
      "https://static.showit.co/302/ibTDV_Jgq5nf3igeiI1BhA/235620/as1a1898.jpg",
      "https://static.showit.co/302/hRWADyb8XxFz0ypffbDfKQ/235620/as1a1745.jpg",
    ],
  },
  {
    name: "Wryly Edits",
    category: "Branding + Website",
    struggle: "Why does building my own site feel so overwhelming?",
    solution:
      "Wryly started building her own site but quickly realized it didn't feel cohesive or aligned with her new business journey. We stepped in to create a professional Showit website design with clean navigation, strategic SEO, and a layout that reflects her witty, approachable voice.",
    cover: "https://static.showit.co/302/3AzVOiFITlEg0g3szId3zA/235620/as1a1687.jpg",
    images: [
      "https://static.showit.co/302/y4VHQuDu0q-ZxHt7oKhqqA/235620/as1a1649.jpg",
    ],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <SEOHead
        title="Portfolio | First & Third Designs"
        description="From Struggle to Solution — every brand has a story. Explore real projects where frustration turned into function, and ideas became reality."
        path="/portfolio"
      />

      {/* Hero */}
      <section className="section-padding section-alt">
        <div className="container-content text-center max-w-3xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Our Work
          </p>
          <h1 className="hero-title text-foreground mb-6">
            From Struggle to Solution
          </h1>
          <p className="section-subtitle italic">
            Every brand has a story — this is where frustration turned into
            function, and ideas became reality.
          </p>
          <Link
            to="/service"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            Learn About Our Services
          </Link>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16 lg:py-20 px-5 md:px-8">
        <div className="container-content">
          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {projects.map((project, i) => {
              const isEven = i % 2 === 0;
              return (
                <article key={project.name} className="group">
                  {/* Project Header */}
                  <div
                    className={`flex flex-col ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8 lg:gap-16 items-start`}
                  >
                    {/* Cover Image */}
                    <div className="w-full lg:w-3/5">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={project.cover}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center lg:py-8">
                      <span className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
                        {project.category}
                      </span>
                      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        {project.name}
                      </h2>
                      <p className="font-heading text-xl md:text-2xl italic text-foreground/80 mb-6 leading-snug">
                        "{project.struggle}"
                      </p>
                      <p className="text-base font-body text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Supporting Images Grid */}
                  <div
                    className={`mt-8 md:mt-12 grid gap-4 md:gap-6 ${
                      project.images.length === 1
                        ? "grid-cols-1 max-w-2xl mx-auto"
                        : project.images.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2 md:grid-cols-3"
                    }`}
                  >
                    {project.images.map((img, j) => (
                      <div
                        key={j}
                        className="aspect-[4/3] overflow-hidden rounded-lg"
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

                  {/* Divider */}
                  {i < projects.length - 1 && (
                    <div className="mt-24 md:mt-32 lg:mt-40 border-t border-border" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-background mb-4">
            Are you ready for your business to be{" "}
            <em>fully booked, wildly profitable</em>, and{" "}
            <em>everything</em> you always knew it could be?
          </h2>
          <p className="text-lg font-body text-background/70 mb-10">
            Let's create something that makes you proud to share your link.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-body font-bold text-sm uppercase tracking-wider rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Do The Damn Thing <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
