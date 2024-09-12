"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/personal-info");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h2>Thank You!</h2>
      <p>Your form has been submitted. You will be redirected shortly...</p>
    </div>
  );
}
