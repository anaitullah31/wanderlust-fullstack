import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/travelerreviews`, {
    cache: "no-store",
  });

  const data = await res.json();
  const travelerreviews = data.data;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <TestimonialsCarousel travelerreviews={travelerreviews} />
      </div>
    </section>
  );
};

export default Testimonials;