export const slideTransition = {
  duration: 0.8,
  ease: [0.74, 0, 0.19, 1.02],
};

export const fadeTransition = {
  delay: 0.15,
  duration: 0.3,
  ease: 'easeIn',
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
