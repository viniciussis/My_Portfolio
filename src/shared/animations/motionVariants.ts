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

export const circleRotation = {
  animate: {
    rotateZ: 360,
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
    },
  },
  taping: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
    },
  },
  exit: {
    rotateZ: 360,
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
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

export const ModalInOut = {
  initial: {
    y: '-100vh',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const hiddenTransition = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}
