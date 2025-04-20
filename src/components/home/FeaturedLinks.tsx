
import { Link } from "react-router-dom";
import { Fish, FlaskConical, Users } from "lucide-react";

export const FeaturedLinks = () => {
  const features = [
    {
      title: "About Us",
      description: "Learn about our story, mission, and values that drive our innovation.",
      icon: <Users className="w-10 h-10 text-rishi-green-dark" />,
      link: "/about",
    },
    {
      title: "Our Products & Services",
      description: "Discover our range of innovative solutions for livestock, poultry, and aquaculture.",
      icon: <Fish className="w-10 h-10 text-rishi-green-dark" />,
      link: "/products",
    },
    {
      title: "R&D & Manufacturing",
      description: "Explore our state-of-the-art facilities and multi-disciplinary expertise.",
      icon: <FlaskConical className="w-10 h-10 text-rishi-green-dark" />,
      link: "/research-development",
    },
  ];

  return (
    <section className="py-16 bg-rishi-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-2xl md:text-3xl font-bold text-rishi-green-dark">
          Explore Rishi Biolife Sciences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-rishi-green-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
              <Link
                to={feature.link}
                className="text-rishi-green-dark font-medium hover:text-rishi-green-light transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
