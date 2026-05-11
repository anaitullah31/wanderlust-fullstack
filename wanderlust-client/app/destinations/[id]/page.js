import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  MapPin,
  Star,
} from "lucide-react";
import EditModal from "@/app/components/EditModal";
import DeleteAlert from "@/app/components/DeleteAlert";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/api/v1/destinations/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const destinationDetails = data?.data;

  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destinationDetails;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-cyan-600"
        >
          <ArrowLeft size={16} />
          Back to Destinations
        </Link>

        <div className="flex items-center gap-3">
          <EditModal destinationDetails={destinationDetails} />

          <DeleteAlert destinationDetails={destinationDetails} />
        </div>
      </div>

      <div className="relative w-full h-150 mb-8">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t pt-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <MapPin size={16} />
            <span>{country}</span>
          </div>

          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            {destinationName}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <span className="flex items-center gap-1">
              <Star size={16} className="fill-green-500 text-green-500" />
              <strong className="text-gray-900">4.9</strong>
              <span>(234 reviews)</span>
            </span>

            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {duration}
            </span>

            <span className="capitalize">{category}</span>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-600 leading-7">{description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Highlights</h2>
            <p className="text-gray-600 leading-7 mb-5">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Luxury beachfront accommodation
              </p>
              <p className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Visit beautiful local attractions
              </p>
              <p className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Traditional cultural experience
              </p>
              <p className="flex items-center gap-2">
                <Check size={16} className="text-green-500" />
                Private beach dinner experience
              </p>
            </div>
          </section>
        </div>

        <div>
          <div className="bg-white shadow-md border p-6 sticky top-24">
            <p className="text-sm text-gray-500">Starting from</p>

            <h3 className="text-3xl font-bold text-cyan-600">${price}</h3>

            <p className="text-sm text-gray-500 mb-6">per person</p>

            <div className="bg-gray-50 px-4 py-3 text-sm text-gray-700 mb-5">
              {departureDate}
            </div>

            <button className="w-full bg-cyan-600 text-white py-3 flex items-center justify-center gap-2 hover:bg-cyan-700 transition">
              Book Now
              <ArrowRight size={16} />
            </button>

            <div className="mt-5 space-y-2 text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                Free cancellation up to 7 days
              </p>
              <p className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                Travel insurance included
              </p>
              <p className="flex items-center gap-2">
                <Check size={15} className="text-green-500" />
                24/7 customer support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
