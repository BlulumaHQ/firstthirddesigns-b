import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[80px]">
        {children}
      </main>
      <Footer />
      <StickyCTA />
      {/* Mobile bottom spacer for sticky CTA */}
      <div className="lg:hidden h-16" />
    </div>
  );
};

export default Layout;
