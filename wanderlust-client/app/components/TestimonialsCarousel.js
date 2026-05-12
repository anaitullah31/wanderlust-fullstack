"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsCarousel = ({ travelerreviews }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <>
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
          <button
            type="button"
            onClick={scrollPrev}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {travelerreviews.map((testimonial) => (
            <div
              key={testimonial._id}
              className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsCarousel;
