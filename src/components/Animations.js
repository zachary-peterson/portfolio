import { motion } from 'framer-motion';

/* Landing Page Animations */

// text-shadow: 2px 4px #000000;

export const neon = {
    init: {
        textShadow: "2px 4px 0px #000000",
        originY: 0
    },
    after: {
        textShadow: "3px 5px 180px #d01c2a",
        transition: {
            duration: .7,
            yoyo: Infinity
        }
    }
}

export const subs = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: .8,
            duration: 1.25
        }
    }
}

export const subsDev = {
    init: {
        opacity: 0,
        textShadow: "3px 8px #000000"
    },
    after: {
        opacity: 1,
        transition: {
            delay: .8,
            duration: 1.25
        }
    },
    hover: {
        textShadow: "6px 13px #000000",
        transition: {
            duration: .2
        }
    }
}

export const leterOne = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: .2,
            duration: 1.25
        }
    }
}

export const leterTwo = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: .3,
            duration: 1.25
        }
    }
}

export const leterThree = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: .4,
            duration: 1.25
        }
    }
}

/* Nav Bar Animations */

export const navVariants = {
    init: {
        opacity: 0
    },
    after: {
        opacity: 1,
        transition: {
            delay: .5,
            duration: .7,
        }
    }
}

export const linkVariants = {
    init: {
        textShadow: "0px 0px 0px #000000",
        boxShadow: "0px 0px 0px #000000"
    },
    after: {
        textShadow: "0px 0px 8px #000000",
        boxShadow: "0px 0px 8px #000000",
        transition: {
            duration: .2
        }
    },
    hover: {
        backgroundColor: '#do1c2a',
        transition: {
            duration: .4,
        }
    }
}

/* Logo Animations */

export const logoVars = {
    init: {
        y: 2000
    },
    after: {
        y: 0,
        transition: {
            delay: .3,
            duration: .5
        }
    }
}

/* About Animations */

export const aboutDiv = {
    init: {
        y: 2000
    },
    after: {
        y: 0,
        transition: {
            delay: .3,
            duration: .5
        }
    }
}