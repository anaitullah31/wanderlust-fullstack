import Image from "next/image";
import Banner from "./components/Banner";
import WhyChooseWanderlust from "./components/WhyChooseWanderlust";
import JourneyBanner from "./components/JourneyBanner";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseWanderlust />
      <Testimonials />
      <JourneyBanner />
    </div>
  );
}
