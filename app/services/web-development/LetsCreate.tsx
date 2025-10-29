import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const LetsCreate = () => {
  return (
    <motion.div
      // @ts-expect-error - ignore
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center bg-[#0B2A4A] text-center p-6  py-12 md:py-16 lg:py-20"
    >
      <motion.h1
        // @ts-expect-error - ignore
        variants={itemVariants}
        className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white"
      >
        Let&apos;s Co-Create Something
      </motion.h1>
      <motion.h2
        // @ts-expect-error - ignore
        variants={itemVariants}
        className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-[#C5A6FF] mt-4"
      >
        <span className="text-yellow-400">Remarkable</span> For Your
      </motion.h2>
      <motion.h3
        // @ts-expect-error - ignore
        variants={itemVariants}
        className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4"
      >
        Vision with <span className="text-yellow-400">Blue-Pixel</span>
      </motion.h3>
      <Link
        href={`/contact-us`}
        className="cursor-pointer mt-8 px-6 py-3 lg:px-12 text-xl lg:py-6 md:text-2xl bg-white text-duck-bluefont font-semibold rounded-full flex items-center gap-2 hover:bg-yellow-400 hover:text-white transition duration-500 ease-in-out"
      >
        Start Now! <ArrowUpRight size={20} />
      </Link>
    </motion.div>
  );
};

export default LetsCreate;
