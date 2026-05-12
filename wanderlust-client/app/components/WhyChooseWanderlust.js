import { Headphones, Map, ShieldCheck } from "lucide-react";

const WhyChooseWanderlust = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      description:
        "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
    },
    {
      icon: Map,
      title: "Expert Guides",
      description:
        "Local experts who bring destinations to life with authentic cultural insights.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service to assist you wherever your journey takes you.",
    },
  ];

  return (
    <section className="bg-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Why Choose Wanderlust
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white px-10 py-10 min-h-50">
              <Icon className="text-cyan-600 mb-8" size={34} />

              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {title}
              </h3>

              <p className="text-sm leading-6 text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWanderlust;
