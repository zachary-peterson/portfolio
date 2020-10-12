import { motion } from 'framer-motion';

/* Landing Page Animations */

// text-shadow: 2px 4px #000000;

export const name = {
    init: {
        textShadow: "2px 4px 0px #000000",
        originY: 0
    },
    after: {
        textShadow: "1px 2px 40px #a31621",
        transition: {
            duration: .2
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
        y: -100
    },
    after: {
        y: 0,
        transition: {
            delay: .3,
            duration: .7,
            stiffness: 600,
            type: "spring"
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