"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "invalid"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      setStatus("invalid");
      setErrorMessage("Please enter a valid email address");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");

        // Clear success message after 3 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );

        // Clear error message after 3 seconds
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 3000);
      }
    } catch (error) {
      if (error) setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );

      // Clear error message after 3 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
          </div>
        );
      case "success":
        return "Subscribed!";
      case "error":
      case "invalid":
        return "Try Again";
      default:
        return "Subscribe";
    }
  };

  const getButtonStyles = () => {
    switch (status) {
      case "success":
        return "border-green-400 text-green-400";
      case "error":
      case "invalid":
        return "border-red-400 text-red-400";
      default:
        return "border-[#00968E] text-[#00968E]";
    }
  };

  const getButtonBgColor = () => {
    switch (status) {
      case "success":
        return "bg-green-500";
      case "error":
      case "invalid":
        return "bg-red-500";
      default:
        return "bg-[#00968E]";
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center md:items-start space-y-4 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-bold text-[#00968E]">Stay Updated</h3>
      <p className="text-gray-300 text-sm text-center md:text-left">
        Subscribe to our newsletter for exclusive offers.
      </p>

      <form onSubmit={handleSubscribe} className="w-full max-w-xs">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "loading"}
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00968E] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          />
          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            whileHover={status === "idle" ? { scale: 1.05 } : {}}
            whileTap={status === "idle" ? { scale: 0.95 } : {}}
            className={`relative inline-flex items-center px-8 py-3 border-2 font-medium overflow-hidden group rounded-lg min-w-[120px] justify-center ${getButtonStyles()} disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-500 delay-100">
              {getButtonContent()}
              {(status === "idle" || status === "loading") && (
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              )}
            </span>

            {/* Background fill that expands from the middle */}
            <span
              className={`absolute inset-0 ${getButtonBgColor()} transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out z-0`}
            />

            {/* Optional: Add a shine effect on hover */}
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0" />
          </motion.button>
        </div>
      </form>

      {/* Status messages that auto-dismiss */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full max-w-xs"
        >
          <p className="text-xs text-green-400 bg-green-900/20 px-3 py-2 rounded-lg border border-green-800/50">
            ✅ Thanks for subscribing! You will hear from us soon.
          </p>
        </motion.div>
      )}

      {(status === "error" || status === "invalid") && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full max-w-xs"
        >
          <p className="text-xs text-red-400 bg-red-900/20 px-3 py-2 rounded-lg border border-red-800/50">
            ❌ {errorMessage}
          </p>
        </motion.div>
      )}

      <p className="text-xs text-gray-400 mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
}
