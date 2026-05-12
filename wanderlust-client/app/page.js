import Image from "next/image";
import Banner from "./components/Banner";
import WhyChooseWanderlust from "./components/WhyChooseWanderlust";
import JourneyBanner from "./components/JourneyBanner";
import Testimonials from "./components/Testimonials";
import FeaturedDestinationsCarousel from "./components/FeaturedDestinationsCarousel";

export default async function Home() {
  const res = await fetch("http://localhost:5000/api/v1/destinations");
  const data = await res.json();
  const destinations = data.data;

  return (
    <div>
      <Banner />
      <FeaturedDestinationsCarousel destinations={destinations} />
      <WhyChooseWanderlust />
      <Testimonials />
      <JourneyBanner />
    </div>
  );
}
