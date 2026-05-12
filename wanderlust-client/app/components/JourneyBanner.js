import Image from "next/image";
import { ArrowRight } from "lucide-react";

const JourneyBanner = () => {
  return (
    <section className="relative h-110 w-full overflow-hidden">
      <Image
        src="/assets/CTA.png"
        alt="Travel destination"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Ready To Start Your Journey?
        </h2>

        <p className="mt-3 text-sm text-gray-200">
          Join thousands of travelers who have discovered the world with us
        </p>

        <button className="mt-8 flex items-center gap-4 bg-white px-8 py-4 text-xs font-semibold uppercase text-black hover:bg-cyan-500 hover:text-white transition">
          Book Your Trip Today
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default JourneyBanner;
