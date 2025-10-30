"use client";

import { useRouter } from "next/navigation";
import { useEffect, ReactNode } from "react";
import { useAuth } from "@/context/authContext";
import { Loader2 } from "lucide-react";

export default function SetUpLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated()) {
    return <Loader2 className="w-4 h-4 animate-spin" />;
  }

  return <>{children}</>;
}