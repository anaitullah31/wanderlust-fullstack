import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900">
              What Travelers Say
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
              <ArrowLeft size={18} />
            </button>
            <button className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-6 flex gap-8 items-start">
            <div className="flex-1">
              <p className="text-lg leading-6 font-medium text-black">
                "The Bali Trip Was Absolutely Magical! Every Detail Was
                Perfectly Planned. The Resorts Were Luxurious And The Cultural
                Experiences Were Unforgettable."
              </p>

              <div className="mt-12 border-t border-cyan-500 pt-2 w-fit">
                <h4 className="text-sm text-cyan-600">Michael Chen</h4>
                <p className="text-xs text-gray-500">Singapore</p>
              </div>
            </div>

            <div className="relative w-44 h-52 shrink-0">
              <Image
                src="/assets/person1.png"
                alt="Michael Chen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="border border-gray-200 p-6 flex gap-8 items-start">
            <div className="flex-1">
              <p className="text-lg leading-6 font-medium text-black">
                "Swiss Alps Adventure Exceeded All Expectations. The Mountain
                Views Were Breathtaking And Our Guide Was Incredibly
                Knowledgeable. Highly Recommend!"
              </p>

              <div className="mt-12 border-t border-cyan-500 pt-2 w-fit">
                <h4 className="text-sm text-cyan-600">Sarah Johnson</h4>
                <p className="text-xs text-gray-500">New York, USA</p>
              </div>
            </div>

            <div className="relative w-44 h-52 shrink-0">
              <Image
                src="/assets/person2.png"
                alt="Sarah Johnson"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
