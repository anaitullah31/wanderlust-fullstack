import Link from "next/link";
import { Lock, Mail, User } from "lucide-react";
import GoogleLoginButton from "../components/GoogleLoginButton";

const SignUpPage = () => {
  return (
    <div className=" bg-gray-50">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-medium text-gray-900">
              Create Account
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Start your adventure with Wanderlust
            </p>
          </div>

          <form className="bg-white border border-gray-200 shadow-md p-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-black">
                Full Name
              </label>
              <div className="relative mt-2">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black">
                Email Address
              </label>
              <div className="relative mt-2">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black">Password</label>
              <div className="relative mt-2">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-cyan-600 py-3 text-sm font-medium text-white hover:bg-cyan-700"
            >
              Create Account
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-500">Or sign up with</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <GoogleLoginButton />

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-cyan-600">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
