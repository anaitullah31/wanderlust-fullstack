import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ destination }) => {
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
  } = destination;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        <div className="relative w-full h-57.5">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="absolute top-5 right-5 bg-white/90 px-4 py-2 shadow">
          <span className="font-semibold">4.5</span>
          <span className="ml-2">★</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <MapPin size={18} />
          <span>{country}</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            {destinationName}
          </h3>

          <p className="text-xl font-semibold text-gray-900 whitespace-nowrap">
            ${price}
            <span className="text-sm font-normal text-gray-500">/Person</span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <Calendar size={18} />
            <span>{duration}</span>
          </div>
          <span className="text-sm text-gray-500">{category}</span>
        </div>

        {/* <p className="text-gray-600 mt-3 line-clamp-2">{description}</p> */}

        <div className="flex items-center justify-between mt-5">
          <Link
            href={`/destinations/${_id}`}
            className="flex items-center gap-2 text-cyan-600 font-semibold uppercase hover:gap-3 transition-all"
          >
            Book Now
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
