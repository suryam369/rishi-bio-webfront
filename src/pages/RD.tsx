
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Microscope, FlaskConical, TestTube } from "lucide-react";

const RD = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-rishi-green-pale py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rishi-green-dark mb-6">
                R&D & Manufacturing
              </h1>
              <p className="text-lg text-gray-700">
                State-of-the-art facilities and multi-disciplinary expertise
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
                Our Facilities
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  Rishi Biolife Sciences has proven capability in R&D, scale-up, and has state-of-the-art production facilities to manufacture a wide range of enzymes and bioactive molecules. Our modern built R&D unit and well-equipped quality control laboratory ensure the highest standards in product development and testing.
                </p>
                <p>
                  Our facilities are designed to support the entire product lifecycle, from initial research and development to large-scale manufacturing, ensuring consistent quality and efficiency throughout the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-rishi-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
              Multi-Disciplinary Expertise
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <FlaskConical className="w-12 h-12 text-rishi-green-dark" />
                </div>
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Sciences</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Aquaculture</li>
                  <li>• Veterinary</li>
                  <li>• Biotechnology</li>
                  <li>• Physiology</li>
                  <li>• Pathology</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <TestTube className="w-12 h-12 text-rishi-green-dark" />
                </div>
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Technical</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Pharmacy</li>
                  <li>• Biochemistry</li>
                  <li>• Microbiology</li>
                  <li>• Chemical Engineering</li>
                  <li>• Quality Control</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Microscope className="w-12 h-12 text-rishi-green-dark" />
                </div>
                <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Business</h3>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Research & Development</li>
                  <li>• Marketing</li>
                  <li>• Business Development</li>
                  <li>• Sales</li>
                  <li>• Customer Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
                Partnerships & Success
              </h2>
              <div className="text-gray-700 space-y-4">
                <p>
                  In bringing together R and D capabilities with marketing, business development and sales team as well as our customers, Rishi Biolife Sciences creates a working environment that encourages openness and the rapid exchange of new ideas while at the same time ensuring high-performance discipline in development.
                </p>
                <p>
                  We have established business relationships with many clients in India and abroad, providing high-quality products with competitive prices and punctual delivery. Our dedication to excellence in every trade step, from negotiation and document preparation to delivery and supply, has earned us a reputation for reliability and integrity.
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

export default RD;
