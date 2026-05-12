"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import DestinationCard from "./DestinationCard";

const FeaturedDestinationsCarousel = ({ destinations }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-14">
          <div>
            <h2 className="text-5xl font-semibold text-gray-900">
              Featured Destinations
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>

          <Link
            href="/destinations"
            className="border border-cyan-500 px-8 py-4 text-cyan-600 uppercase flex items-center gap-8 hover:bg-cyan-500 hover:text-white transition"
          >
            All Destinations
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-8">
            {destinations.map((destination) => (
              <div
                key={destination._id}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-16px)]"
              >
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-8">
          <p className="text-3xl text-black">1/{destinations.length}</p>

          <div className="h-px flex-1 bg-gray-300" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-cyan-500 hover:text-cyan-500 transition"
            >
              <ArrowLeft size={22} />
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-cyan-500 hover:text-cyan-500 transition"
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinationsCarousel;
