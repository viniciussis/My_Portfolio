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

export const springSlideInLeft: Variants = {
  hidden: { opacity: 0, x: -100, y: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      mass: 0.8,
    }
  },
}

export const springSlideInRight: Variants = {
  hidden: { opacity: 0, x: 100, y: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
      mass: 0.8,
    }
  },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
      delay: 0.2
    }
  },
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

export const iconAnimation: Variants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
}
