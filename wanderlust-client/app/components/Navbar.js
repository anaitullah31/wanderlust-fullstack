import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Wanderlast.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4 max-w-7xl mx-auto">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/my-bookings">My Bookings</Link>
          </li>
          <li>
            <Link href="/add-destination">Add Destination</Link>
          </li>
        </ul>
        <div>
          <Image src={Logo} width={150} height={150} alt="Wanderlust" />
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Sing Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
