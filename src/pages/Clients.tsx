
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Clients = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-rishi-green-pale py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rishi-green-dark mb-6">
                Clients & Testimonials
              </h1>
              <p className="text-lg text-gray-700">
                Our partnerships and success stories
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-12 text-center">
              Our Trusted Clients
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {/* Client logos would be populated here */}
              {[...Array(10)].map((_, index) => (
                <div key={index} className="bg-gray-100 p-6 flex items-center justify-center rounded-lg h-24">
                  <div className="text-gray-400 font-semibold">Client Logo</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-rishi-gray-light">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-12 text-center">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-rishi-green-light">
                    {/* Star ratings */}
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 mb-4">
                  "Rishi Biolife Sciences has consistently delivered high-quality products that have significantly improved our livestock health outcomes. Their expertise and commitment to excellence are truly commendable."
                </blockquote>
                <div className="font-semibold text-rishi-green-dark">Client Name</div>
                <div className="text-sm text-gray-600">Company Position, Company Name</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-rishi-green-light">
                    {/* Star ratings */}
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 mb-4">
                  "The aquaculture solutions provided by Rishi Biolife Sciences have revolutionized our operations. Their innovative approach and attention to detail have helped us achieve remarkable results in water quality and production."
                </blockquote>
                <div className="font-semibold text-rishi-green-dark">Client Name</div>
                <div className="text-sm text-gray-600">Company Position, Company Name</div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-rishi-green-light">
                    {/* Star ratings */}
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="italic text-gray-700 mb-4">
                  "We've been working with Rishi Biolife Sciences for over two years now, and their veterinary formulations have consistently exceeded our expectations. Their prompt delivery and excellent customer service make them a reliable partner."
                </blockquote>
                <div className="font-semibold text-rishi-green-dark">Client Name</div>
                <div className="text-sm text-gray-600">Company Position, Company Name</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-rishi-green-dark mb-12 text-center">
              Our Success in Numbers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-rishi-green-dark mb-2">100+</div>
                <div className="text-gray-700">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rishi-green-dark mb-2">20+</div>
                <div className="text-gray-700">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rishi-green-dark mb-2">50+</div>
                <div className="text-gray-700">Innovative Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rishi-green-dark mb-2">10+</div>
                <div className="text-gray-700">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Clients;
