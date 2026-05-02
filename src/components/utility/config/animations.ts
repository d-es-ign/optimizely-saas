export const slideTransition = {
  duration: 0.8,
  ease: [0.74, 0, 0.19, 1.02] as const,
};

export const fadeTransition = {
  delay: 0.15,
  duration: 0.3,
  ease: 'easeIn' as const,
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut' as const,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut' as const,
    },
  },
};
