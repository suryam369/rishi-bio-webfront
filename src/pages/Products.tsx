
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Fish, FlaskConical, Pill } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-rishi-green-pale py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rishi-green-dark mb-6">
                Products & Verticals
              </h1>
              <p className="text-lg text-gray-700">
                Innovative solutions for livestock, poultry, aquaculture, and veterinary healthcare
              </p>
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-4">
                Our Product Categories
              </h2>
              <p className="text-gray-700">
                Rishi Biolife Sciences offers a diverse range of high-quality products across multiple verticals, focused on holistic animal health and nutrition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-rishi-green-dark p-4 flex justify-center">
                  <div className="bg-white p-3 rounded-full">
                    <Pill className="w-8 h-8 text-rishi-green-dark" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Livestock & Poultry</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>• Feed supplements</li>
                    <li>• Antibacterial agents</li>
                    <li>• Premixes</li>
                    <li>• Sanitizers</li>
                    <li>• Specialty powders</li>
                  </ul>
                  <CtaButton href="#" variant="outline" size="sm" className="w-full">
                    Learn More
                  </CtaButton>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-rishi-green-dark p-4 flex justify-center">
                  <div className="bg-white p-3 rounded-full">
                    <Fish className="w-8 h-8 text-rishi-green-dark" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Aquaculture</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>• Aqua-field testing</li>
                    <li>• Innovative culture techniques</li>
                    <li>• Water quality analysis</li>
                    <li>• Soil quality analysis</li>
                    <li>• Aqua inputs</li>
                  </ul>
                  <CtaButton href="#" variant="outline" size="sm" className="w-full">
                    Learn More
                  </CtaButton>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-rishi-green-dark p-4 flex justify-center">
                  <div className="bg-white p-3 rounded-full">
                    <FlaskConical className="w-8 h-8 text-rishi-green-dark" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Veterinary Nutrition & Healthcare</h3>
                  <ul className="text-gray-700 space-y-2 mb-6">
                    <li>• Formulations for animal health</li>
                    <li>• Holistic medicines</li>
                    <li>• Probiotics</li>
                    <li>• Enzymes</li>
                    <li>• Specialty biomolecules</li>
                  </ul>
                  <CtaButton href="#" variant="outline" size="sm" className="w-full">
                    Learn More
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-rishi-gray-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Our team of experts can develop specialized products to meet your specific requirements. Get in touch to discuss your needs.
            </p>
            <CtaButton href="/contact" size="lg">
              Contact Our Team
            </CtaButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
