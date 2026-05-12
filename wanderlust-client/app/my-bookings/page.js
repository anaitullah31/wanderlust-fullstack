import Image from "next/image";
import {
  Calendar,
  Eye,
  MapPin,
  Trash2,
  CheckCircle,
  Clock,
} from "lucide-react";

const MyBookingsPage = () => {
  const bookings = [
    {
      id: "b1",
      title: "Bali Paradise",
      image: "https://i.ibb.co/3Xc0nKg/8.jpg",
      departureDate: "May 15, 2026",
      price: 1299,
      status: "Confirmed",
    },
    {
      id: "b2",
      title: "Bali Paradise",
      image: "https://i.ibb.co/N2qMNqZT/2.jpg",
      departureDate: "May 15, 2026",
      price: 1299,
      status: "Confirmed",
    },
    {
      id: "b3",
      title: "Venice & Italian Riviera",
      image: "https://i.ibb.co/DHB7xXQ2/9.jpg",
      departureDate: "May 15, 2026",
      price: 1299,
      status: "Pending",
    },
  ];

  return (
    <div className=" bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-medium text-gray-900">My Bookings</h1>
          <p className="mt-3 text-sm text-gray-500">
            Manage and view your upcoming travel plans
          </p>
        </div>

        <div className="space-y-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border border-gray-200 p-5 flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="relative w-full md:w-90 h-47.5 shrink-0">
                <Image
                  src={booking.image}
                  alt={booking.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                    booking.status === "Confirmed"
                      ? "bg-green-50 text-green-600"
                      : "bg-orange-50 text-orange-500"
                  }`}
                >
                  {booking.status === "Confirmed" ? (
                    <CheckCircle size={13} />
                  ) : (
                    <Clock size={13} />
                  )}
                  {booking.status}
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-gray-900">
                  {booking.title}
                </h2>

                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p className="flex items-center gap-2">
                    <Calendar size={15} />
                    Departure: {booking.departureDate}
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={15} />
                    Booking ID: {booking.id}
                  </p>
                </div>

                <h3 className="mt-4 text-3xl font-semibold text-cyan-600">
                  ${booking.price}
                </h3>
              </div>

              <div className="flex md:self-end gap-3">
                <button className="flex items-center cursor-pointer gap-2 border border-red-400 px-6 py-3 text-sm text-red-500 hover:bg-red-50">
                  <Trash2 size={14} />
                  Cancel
                </button>

                <button className="flex items-center cursor-pointer gap-2 bg-cyan-600 px-6 py-3 text-sm text-white hover:bg-cyan-700">
                  <Eye size={14} />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyBookingsPage;
