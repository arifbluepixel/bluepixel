export const heroContentVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    transition: { duration: 0.3 },
  },
};
export const bgLeftVariants = {
  initial: { clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" },
  animate: {
    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)",
    transition: { duration: 0.6 },
  },
};

export const bgRightVariants = {
  initial: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
  animate: {
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.6 },
  },
};

export const bgMobileVariants = {
  initial: { clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
    transition: { duration: 0.6 },
  },
};

export const welcomeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const welcomeItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const showAndVanish = {
  initial: { opacity: 1 },
  exit: { opacity: 0 },
};

export const appearFromNothing = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const appearFromNothingToY = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};
