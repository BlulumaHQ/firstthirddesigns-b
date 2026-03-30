import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredImages = [
  {
    src: "https://static.showit.co/400/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
    alt: "Website design showcase",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
    alt: "Brand design detail",
    span: "",
  },
  {
    src: "https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
    alt: "Creative female entrepreneurs collaborating",
    span: "",
  },
  {
    src: "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
    alt: "Design workspace inspiration",
    span: "md:col-span-2",
  },
];

const FeaturedWork = () => {
  return (
    <section className="section-padding section-warm">
      <div className="container-content">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div>
            <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
              Featured Work
            </p>
            <h2 className="section-title text-foreground mb-6">
              Brands We've Brought to Life
            </h2>
            <p className="section-subtitle mb-8">
              A glimpse into the stories we've brought to life — always intentional, always rooted in the identity and impact of the women behind the brand.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
            >
              See All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://static.showit.co/200/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg"
              alt="Design mood board"
              className="rounded-lg shadow-xl w-full object-cover aspect-square"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredImages.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-lg ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
