export const slideIn = {
  initial: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideOut = {
  initial: {
    scaleY: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const hiddenTransition = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
}
