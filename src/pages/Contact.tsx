import { useState } from "react";
import { ArrowRight, Send } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form structure ready — no fake endpoint
    alert("Thank you for reaching out! We'll be in touch soon.");
  };

  return (
    <Layout>
      <SEOHead
        title="Contact"
        description="Ready to build a brand that connects? Schedule a call or send us a message. We'd love to hear from you."
        path="/contact"
      />

      {/* Hero + Form */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-sm font-body font-semibold uppercase tracking-[0.15em] text-secondary mb-4">
                Get In Touch
              </p>
              <h1 className="hero-title text-foreground mb-6">
                Let's Make It Happen
              </h1>
              <p className="section-subtitle mb-8">
                We're ready when you are. Whether you're starting fresh or ready for a rebrand, we'd love to hear your story.
              </p>
              <div className="space-y-4 mb-8">
                <p className="font-body text-sm text-muted-foreground">
                  Follow @firstandthirddesigns
                </p>
              </div>
              <img
                src="https://static.showit.co/400/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png"
                alt="First & Third Designs workspace"
                className="rounded-lg shadow-lg w-full max-w-sm object-cover hidden md:block"
                loading="lazy"
              />
            </div>
            <div>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-2">
                    What Service Are You Interested In?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select a service...</option>
                    <option value="branding">Branding</option>
                    <option value="website-week">Website in a Week</option>
                    <option value="website-day">Website in a Day</option>
                    <option value="branding-website">Branding + Website</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body font-semibold text-foreground mb-2">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-md hover:opacity-90 transition-opacity"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
