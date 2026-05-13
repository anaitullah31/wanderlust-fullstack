"use client";

import { authClient } from "@/lib/auth-client";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookingButton = ({ destinationDetails }) => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return;
  }
  const {
    _id: destinationId,
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,
  } = destinationDetails;

  const bookingData = {
    userId: user.id,
    userImage: user.image,
    userName: user.name,
    destinationId,
    destinationName,
    country,
    price,
    duration,
    departureDate,
    imageUrl,
    status: "pending",
  };

  const handleBooking = async () => {
    const res = await fetch("http://localhost:5000/api/v1/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Booking added successfully", {
        position: "top-center",
      });
    }
    router.push("/my-bookings");
  };

  return (
    <button
      onClick={handleBooking}
      className="w-full cursor-pointer bg-cyan-600 text-white py-3 flex items-center justify-center gap-2 hover:bg-cyan-700 transition"
    >
      Book Now
      <ArrowRight size={16} />
    </button>
  );
};

export default BookingButton;
