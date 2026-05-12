import Image from "next/image";
import {
  Camera,
  Edit,
  MapPin,
  Plane,
  RefreshCw,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const ProfilePage = () => {
  const user = {
    name: "Sarah Mitchell",
    location: "San Francisco, CA",
    image: "/assets/person1.png",
    memberSince: "Mar 2024",
    nationality: "United States",
  };

  return (
    <div className=" bg-white">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-medium text-gray-900">My Profile</h1>
          <p className="mt-3 text-sm text-gray-500">
            Manage your account settings and travel preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="border border-gray-200 shadow-md p-6">
            <div className="flex flex-col items-center">
              <div className="relative w-28 h-28">
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  sizes="112px"
                  className="rounded-full object-cover"
                />

                <button className="absolute bottom-1 right-1 bg-cyan-600 text-white p-2 rounded-full">
                  <Camera size={14} />
                </button>
              </div>

              <h2 className="mt-5 text-lg font-semibold text-gray-900">
                {user.name}
              </h2>

              <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                <MapPin size={14} />
                {user.location}
              </p>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Member since</span>
                <span className="font-semibold text-gray-900">
                  {user.memberSince}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Nationality</span>
                <span className="font-semibold text-gray-900">
                  {user.nationality}
                </span>
              </div>
            </div>

            <button className="mt-6 w-full cursor-pointer bg-cyan-600 py-3 text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-cyan-700">
              <Edit size={15} />
              Edit Profile
            </button>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Travel Statistics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-gray-200 p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Bookings</p>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    12
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Plane size={22} />
                </div>
              </div>

              <div className="border border-gray-200 p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Countries Visited</p>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    18
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <RefreshCw size={22} />
                </div>
              </div>

              <div className="border border-gray-200 p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Upcoming Trips</p>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    2
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                  <TrendingUp size={22} />
                </div>
              </div>

              <div className="border border-gray-200 p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Spent</p>
                  <h4 className="mt-3 text-xl font-semibold text-gray-900">
                    $15,750
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                  <DollarSign size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
