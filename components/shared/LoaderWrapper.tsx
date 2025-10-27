"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/shared/Loader";

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowSplash(true);
    const timer = setTimeout(() => setShowSplash(false), 350);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <section className="relative">
      {showSplash && <Loader />}{" "}
      {/* Show loader on top, not replacing content */}
      <div className={showSplash ? "opacity-20" : "opacity-100"}>
        {children}
      </div>
    </section>
  );
};

export default LoaderWrapper;
