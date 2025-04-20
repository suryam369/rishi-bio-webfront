
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CtaButton } from "@/components/ui/CtaButton";

const Team = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-rishi-green-pale py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rishi-green-dark mb-6">
                Team & Careers
              </h1>
              <p className="text-lg text-gray-700">
                Meet our leadership team and explore career opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
              Our Leadership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Team members would be populated here with real images & names */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rishi-green-dark">Leadership Name</h3>
                  <p className="text-rishi-green-light mb-3">Founder & CEO</p>
                  <p className="text-gray-700">
                    Bio text would go here describing the leader's background, expertise, and vision for the company.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rishi-green-dark">Leadership Name</h3>
                  <p className="text-rishi-green-light mb-3">Chief Scientific Officer</p>
                  <p className="text-gray-700">
                    Bio text would go here describing the leader's background, expertise, and vision for the company.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-rishi-green-dark">Leadership Name</h3>
                  <p className="text-rishi-green-light mb-3">Head of R&D</p>
                  <p className="text-gray-700">
                    Bio text would go here describing the leader's background, expertise, and vision for the company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 bg-rishi-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-8 text-center">
                Our Culture
              </h2>
              <div className="text-gray-700 space-y-4 mb-8">
                <p className="text-center text-lg">
                  "We believe that our greatest assets are the gifts, talents, and abilities of our employees. We foster a sense of community throughout our organization that respects the diversity of perspectives, opinions, talents, and backgrounds."
                </p>
                <p className="text-center">
                  At Rishi Biolife Sciences, we create a working environment that encourages openness and the rapid exchange of new ideas while ensuring high-performance discipline in development. Our culture is centered around innovation, collaboration, and excellence in everything we do.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Our Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Innovation and creativity</li>
                    <li>• Excellence in research and development</li>
                    <li>• Integrity and transparency</li>
                    <li>• Collaboration and teamwork</li>
                    <li>• Customer satisfaction</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">Benefits of Joining Us</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Opportunity to work on cutting-edge biopharmaceutical research</li>
                    <li>• Collaborative and supportive work environment</li>
                    <li>• Professional growth and development</li>
                    <li>• Competitive compensation and benefits</li>
                    <li>• Work-life balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate about innovation and excellence in the biopharmaceutical industry. If you're interested in joining our team, we'd love to hear from you.
            </p>
            <CtaButton href="/contact" size="lg">
              Apply Now
            </CtaButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Team;
