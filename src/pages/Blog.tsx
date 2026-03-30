import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const featuredPost = {
  title: "When Your Brand Stops Feeling Like You — It's Time",
  excerpt:
    "You've outgrown the DIY logo and the website you built at 2am. That's not failure — that's growth. Here's how to know when it's time to invest in a brand that actually matches the business you've built.",
  category: "Real Talk",
  date: "March 2025",
  image:
    "https://static.showit.co/1600/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg",
};

const categories = [
  { name: "Real Talk", description: "Honest conversations about the messy middle" },
  { name: "Smarter Not Harder", description: "Strategy that respects your time" },
  { name: "You Got This", description: "Motivation when you need it most" },
  { name: "Hustle Hotline", description: "Quick wins & daily encouragement" },
];

const blogPosts = [
  {
    title: "5 Things Every Service Provider Needs on Their Website",
    excerpt:
      "Your website is working for you 24/7. Make sure it's saying the right things to the right people — because first impressions don't get a redo.",
    category: "Smarter Not Harder",
    date: "February 2025",
    image:
      "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
  },
  {
    title: "The Power of Showing Up Authentically Online",
    excerpt:
      "Your people are looking for the real you. Here's why authenticity isn't just a buzzword — it's your greatest marketing tool.",
    category: "You Got This",
    date: "January 2025",
    image:
      "https://static.showit.co/1200/W2_TQkY3XrZi3Drh3tpe2w/235620/corinne-kutz-omftdpbbfxe-unsplash.jpg",
  },
  {
    title: "How I Built My Business Around Nap Time",
    excerpt:
      "Spoiler: it wasn't glamorous. But it was possible. A behind-the-scenes look at building something real in the in-between moments.",
    category: "Real Talk",
    date: "December 2024",
    image:
      "https://static.showit.co/800/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
  },
  {
    title: "Stop Waiting for 'Ready' — Start Before You Feel It",
    excerpt:
      "That perfect moment you're waiting for? It doesn't exist. Here's your permission slip to start messy and figure it out along the way.",
    category: "Hustle Hotline",
    date: "November 2024",
    image:
      "https://static.showit.co/400/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
  },
  {
    title: "Why Your Brand Colors Actually Matter More Than You Think",
    excerpt:
      "Color isn't just aesthetic — it's emotional. The right palette can make your dream client feel something before they ever read a word.",
    category: "Smarter Not Harder",
    date: "October 2024",
    image:
      "https://static.showit.co/800/FCEBECixG_oi_9Es4VArjA/235620/20.png",
  },
  {
    title: "A Love Letter to the Woman Still Figuring It Out",
    excerpt:
      "You don't need to have it all together. You just need to keep going. This one's for you.",
    category: "You Got This",
    date: "September 2024",
    image:
      "https://static.showit.co/800/n6H7Rj05r5Z0700SG0gu0A/235620/21.png",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog"
        description="The Splenda Mama Hustle blog — real talk, strategy, and encouragement for women building businesses and lives they love."
        path="/blog"
      />

      {/* SECTION 1 — Featured Post Hero */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-20">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
                {featuredPost.category} · {featuredPost.date}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5">
                {featuredPost.title}
              </h1>
              <p className="text-base md:text-lg font-body text-white/80 leading-relaxed mb-8 max-w-2xl">
                {featuredPost.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-white border-b border-white/40 pb-1 hover:border-white transition-colors cursor-pointer">
                Read the Full Story <ArrowRight size={15} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Categories */}
      <section className="section-padding section-alt">
        <div className="container-content">
          <p className="text-center text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-10">
            Explore by Theme
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="group text-center py-5 px-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-all"
              >
                <span className="block font-heading text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <span className="block text-xs font-body text-muted-foreground leading-snug">
                  {cat.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Blog Grid */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {blogPosts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-body font-semibold uppercase tracking-wider text-secondary">
                    {post.category}
                  </span>
                  <span className="text-xs font-body text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-sm font-body font-semibold text-primary inline-flex items-center gap-1.5 border-b border-primary/30 pb-0.5 group-hover:border-primary transition-colors">
                  Read More <ArrowRight size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Community Message */}
      <section className="section-padding section-warm">
        <div className="container-content max-w-3xl mx-auto text-center">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-5">
            More Than a Blog
          </p>
          <h2 className="section-title text-foreground mb-6">
            This Is Your Corner of the Internet
          </h2>
          <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed mb-4">
            Built for the woman who's juggling client calls between school pickups. For the one
            sketching business plans on the back of a grocery list. You're not behind — you're
            building something incredible on your own timeline.
          </p>
          <p className="text-lg md:text-xl font-body text-muted-foreground leading-relaxed">
            Pull up a chair, grab your coffee (or your third reheated cup), and stay a while.
            You belong here.
          </p>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="section-padding">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-foreground mb-6">Stay in the Loop</h2>
          <p className="section-subtitle mb-10">
            New stories, strategies, and real talk — delivered when you need them most.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Join the Journey <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
