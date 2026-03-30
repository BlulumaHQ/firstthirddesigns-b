import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const blogPosts = [
  {
    title: "How to Know When It's Time for a Rebrand",
    excerpt: "If your brand hasn't kept up with the business you've built, it might be time for a fresh start. Here's how to know.",
    date: "March 2025",
    category: "Branding",
  },
  {
    title: "5 Things Every Service Provider Needs on Their Website",
    excerpt: "Your website is working for you 24/7. Make sure it's saying the right things to the right people.",
    date: "February 2025",
    category: "Web Design",
  },
  {
    title: "The Power of Showing Up Authentically Online",
    excerpt: "Your people are looking for the real you. Here's why authenticity is your greatest marketing tool.",
    date: "January 2025",
    category: "Strategy",
  },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog"
        description="The Splenda Mama Hustle blog — for women juggling life and ambition. Dive in, feel seen, and get the support you actually need."
        path="/blog"
      />

      {/* Hero */}
      <section className="section-padding section-alt">
        <div className="container-content text-center max-w-3xl mx-auto">
          <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
            Hustle Hotline
          </p>
          <h1 className="hero-title text-foreground mb-6">Splenda Mama Hustle</h1>
          <p className="section-subtitle">
            If you've ever felt like you're building your business in the in-between moments, this is the place for you. Dive in, feel seen, and get the kind of support you actually need.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-card border border-border rounded-lg overflow-hidden group">
                <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                  <img
                    src="https://static.showit.co/200/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg"
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-secondary">{post.category}</span>
                    <span className="text-xs font-body text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-body font-semibold text-primary inline-flex items-center gap-1.5">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-warm">
        <div className="container-content text-center max-w-2xl mx-auto">
          <h2 className="section-title text-foreground mb-6">Want to Work Together?</h2>
          <p className="section-subtitle mb-10">
            We believe in you, now it's your turn.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            Let's Make It Happen <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
