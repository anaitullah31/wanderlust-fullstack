"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const Signout = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    await authClient.signOut();
    router.refresh();
    console.log("Done");
  };
  return (
    <Button onClick={handleSignOut} className={"rounded-md"} slot="close">
      Sing Out
    </Button>
  );
};

export default Signout;
