
import { CtaButton } from "../ui/CtaButton";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-rishi-green-pale to-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rishi-green-dark mb-6 leading-tight">
            Innovating Holistic Biopharma & Nutritional Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Pioneering research and development for animal and human healthcare through advanced biopharmaceuticals, enzymes, and specialty biomolecules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CtaButton href="/about" size="lg">
              Learn More
            </CtaButton>
            <CtaButton href="/contact" variant="outline" size="lg">
              Get in Touch
            </CtaButton>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
