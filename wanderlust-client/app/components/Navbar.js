import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/Wanderlast.png";
import { Button, Drawer } from "@heroui/react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Signout from "./Signout";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

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
          <Image
            src={Logo}
            width={150}
            height={150}
            alt="Wanderlust"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div>
          {session ? (
            <Drawer>
              <Button variant="secondary" className="rounded-md">
                Profile
              </Button>
              <Drawer.Backdrop>
                <Drawer.Content placement="right">
                  <Drawer.Dialog>
                    <Drawer.Header>
                      <Drawer.Heading>Profile</Drawer.Heading>
                    </Drawer.Header>
                    <Drawer.Body>
                      <div className="space-y-6">
                        <div className="flex flex-col items-center text-center">
                          <Image
                            src={user.image}
                            alt={user.name}
                            width={96}
                            height={96}
                            className="rounded-full border object-cover"
                          />

                          <h3 className="mt-4 text-xl font-semibold text-gray-900">
                            {user.name}
                          </h3>

                          <p className="text-sm text-gray-500">{user.email}</p>

                          {user.emailVerified ? (
                            <span className="mt-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                              Email Verified
                            </span>
                          ) : (
                            <span className="mt-2 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                              Email Not Verified
                            </span>
                          )}
                        </div>

                        <div className="space-y-3 rounded-lg border bg-gray-50 p-4 text-sm">
                          <div className="flex justify-between gap-4">
                            <span className="text-gray-500">User ID</span>
                            <span className="text-right font-medium text-gray-800">
                              {user.id}
                            </span>
                          </div>

                          <div className="flex justify-between gap-4">
                            <span className="text-gray-500">Name</span>
                            <span className="font-medium text-gray-800">
                              {user.name}
                            </span>
                          </div>

                          <div className="flex justify-between gap-4">
                            <span className="text-gray-500">Email</span>
                            <span className="font-medium text-gray-800">
                              {user.email}
                            </span>
                          </div>

                          <div className="flex justify-between gap-4">
                            <span className="text-gray-500">Created</span>
                            <span className="font-medium text-gray-800">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </span>
                          </div>

                          <div className="flex justify-between gap-4">
                            <span className="text-gray-500">Updated</span>
                            <span className="font-medium text-gray-800">
                              {new Date(user.updatedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                      <Button
                        className={"rounded-md"}
                        slot="close"
                        variant="secondary"
                      >
                        Cancel
                      </Button>
                      <Signout />
                    </Drawer.Footer>
                  </Drawer.Dialog>
                </Drawer.Content>
              </Drawer.Backdrop>
            </Drawer>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
