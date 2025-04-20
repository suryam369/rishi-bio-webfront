
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-rishi-green-pale py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rishi-green-dark mb-6">
                About Rishi Biolife Sciences
              </h1>
              <p className="text-lg text-gray-700">
                A startup bio-pharmaceutical company focused on innovation and excellence
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
                Our Story
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Rishi bio-life sciences is a startup bio-pharmaceutical company focused on the discovery, development, and commercialization of novel biopharmaceuticals, enzymes, probiotics, feed supplements, veterinary formulations, and specialty biomolecules.
                </p>
                <p>
                  The company is unique and a first of its kind in India which has a dedicated focus on catering the needs of Holistic medicines and nutritional requirements for animals Health Care and human health care. Backed by a young and energetic team consisting of biotechnologists, chemists, marketing, and management professionals, our products have been developed through extensive research over many years.
                </p>
                <p>
                  The company has proven capability in R&D, scale-up, and has state-of-the-art production facilities to manufacture a wide range of enzymes and bioactive molecules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-rishi-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
                Mission & Vision
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To deliver innovative, high-quality solutions that ensure healthy livestock, aquaculture & human well-being. We strive to provide fully furnished products that are packed, bottled, labelled, and boxed for shipment, resale, and end use.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-4">Our Vision</h3>
                  <p className="text-gray-700">
                    To be a leading bio-pharmaceutical company recognized for innovation, quality, and sustainable practices. We aspire to create a working environment that encourages openness and the rapid exchange of new ideas while ensuring high-performance discipline in development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
              Our Values
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">R&D Excellence</h3>
                <p className="text-gray-700">
                  Commitment to research and innovation that drives our product development
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">State-of-the-Art Manufacturing</h3>
                <p className="text-gray-700">
                  Modern facilities and processes that ensure product quality and efficiency
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Sustainable Practices</h3>
                <p className="text-gray-700">
                  Eco-friendly approaches to development and production
                </p>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Expert Community</h3>
                <p className="text-gray-700">
                  A diverse team of biotechnologists, chemists, marketers, and management professionals
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
