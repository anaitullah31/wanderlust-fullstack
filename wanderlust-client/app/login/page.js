"use client";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSigninSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      callbackURL: "/",
      rememberMe: false,
    });

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    router.push("/");
  };

  return (
    <div className=" bg-gray-50">
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-gray-900">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Resume your adventure with Wanderlust
            </p>
          </div>

          <form
            onSubmit={handleSigninSubmit}
            className="bg-white border border-gray-200 shadow-md p-8 space-y-5"
          >
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
                  name="email"
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
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-500">
                <input type="checkbox" className="size-4" />
                Remember me
              </label>

              <Link href="/forgot-password" className="text-cyan-600">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "" : "cursor-pointer"} bg-cyan-600 py-3 text-sm font-medium text-white hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-cyan-600`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-500">Or continue with</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <GoogleLoginButton text="Sign Up With Google" />

            <p className="text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-cyan-600">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
