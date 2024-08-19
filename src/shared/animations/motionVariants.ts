export const pageTransition = {
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
  outScreen: {
    x: '100vw',
  },
  onScreen: {
    x: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.5,
      duration: 1,
    },
  },
  offScreen: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
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

export const topDownTransition = {
  outScreen: {
    y: '-100%',
  },
  onScreen: {
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.5,
      duration: 0.25,
      type: 'tween',
    },
  },
  offScreen: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
      delay: 0.5,
      duration: 1,
    },
  },
}
