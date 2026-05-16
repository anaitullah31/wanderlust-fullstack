import Image from "next/image";
import {
  Calendar,
  Eye,
  MapPin,
  Trash2,
  CheckCircle,
  Clock,
} from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import DeleteBookingAlert from "../components/CancelBookingAlert";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const res = await fetch(
    `http://localhost:5000/api/v1/bookings/${session?.user?.id}`
  );
  const data = await res.json();
  // console.log(data.data);

  const myBookings = data?.data;

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
          {myBookings?.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 py-20 text-center">
              <div className="rounded-full bg-cyan-50 p-5">
                <Calendar className="text-cyan-600" size={40} />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                No Bookings Found
              </h2>

              <p className="mt-2 max-w-md text-sm text-gray-500">
                You haven&apos;t booked any destinations yet. Start exploring
                amazing places and plan your next adventure.
              </p>

              <Link
                href="/destinations"
                className="mt-6 bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700"
              >
                Explore Destinations
              </Link>
            </div>
          ) : (
            myBookings.map((booking) => (
              <div
                key={booking._id}
                className="border border-gray-200 p-5 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="relative w-full md:w-90 h-47.5 shrink-0">
                  <Image
                    src={booking.imageUrl}
                    alt={booking.destinationName}
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
                    {booking.destinationName}, {booking.country}
                  </h2>

                  <div className="mt-4 space-y-2 text-sm text-gray-500">
                    <p className="flex items-center gap-2">
                      <Calendar size={15} />
                      Departure: {booking.departureDate}
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin size={15} />
                      Booking ID: {booking._id}
                    </p>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold text-cyan-600">
                    ${booking.price}
                  </h3>
                </div>

                <div className="flex md:self-end gap-3">
                  <DeleteBookingAlert bookingId={booking._id} />

                  <button className="flex items-center cursor-pointer gap-2 bg-cyan-600 px-6 py-2 text-sm text-white hover:bg-cyan-700">
                    <Eye size={14} />
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default MyBookingsPage;
