import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/sections/HeroSection";
import TrustBlock from "@/components/sections/TrustBlock";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABlock from "@/components/sections/CTABlock";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="First & Third Designs | Brand & Web Design for Women Entrepreneurs"
        description="We help passion-driven female entrepreneurs turn their story, their strategy, and their vision into a brand people connect with."
        path="/"
      />
      <HeroSection />
      <TrustBlock />
      <ServicesSection />
      <FeaturedWork />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABlock />
    </Layout>
  );
};

export default Index;
