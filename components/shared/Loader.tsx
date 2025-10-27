"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Loader = () => {
  // Manually Prefetch
  const router = useRouter();
  useEffect(() => {
    // router.prefetch("/contact-us");
  }, [router]);
  //
  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-900 bg-opacity-50">
      <div className="relative w-16 h-16 border-4 border-t-4 border-gray-300 border-solid rounded-full animate-spin">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
