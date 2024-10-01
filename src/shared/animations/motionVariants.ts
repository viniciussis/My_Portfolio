import { Variants } from 'framer-motion'

export const carrouselSlide: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-50%',
    transition: {
      duration: 150,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}

export const timeline: Variants = {
  hiddenleft: { opacity: 0, x: -100 },
  hiddenright: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}

export const carrouselSlideReverse: Variants = {
  initial: {
    x: '-50%',
  },
  animate: {
    x: 0,
    transition: {
      duration: 50,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}

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
