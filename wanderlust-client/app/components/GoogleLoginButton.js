"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="w-full cursor-pointer border border-gray-200 bg-white py-3 text-sm font-medium text-gray-800 hover:bg-gray-50 transition flex justify-center gap-1"
    >
      <FcGoogle className="" />
      <span>Sign Up With Google</span>
    </button>
  );
};

export default GoogleLoginButton;
