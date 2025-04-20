
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { FeaturedLinks } from "@/components/home/FeaturedLinks";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <FeaturedLinks />
      <Footer />
    </>
  );
};

export default Index;
