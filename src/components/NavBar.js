import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { logoVars, linkVariants, navVariants } from './Animations'

import logo400 from './assets/logo-no-bg-400.png';

export const NavBar = () => {
    const { push } = useHistory();

    return (
        <motion.nav className='navbar' initial="init" animate="after">
            <motion.div className='logo-holder'>
                <motion.img className='logo' src={logo400} alt='logo' onClick={() => push('/')} 
                    variants={navVariants} initial='init' animate='after'/>
            </motion.div>

            <motion.div className='navbttns' variants={navVariants} initial="init" whileHover="after">
                <motion.button className='navbttn' onClick={() => push('/portfolio')} 
                variants={linkVariants} initial="init" whileHover="after">Portfolio</motion.button>
                <motion.button className='navbttn' onClick={() => push('/about')}
                variants={linkVariants} initial="init" whileHover="after">About</motion.button>
                <motion.button className='navbttn' onClick={() => push('/contact')}
                variants={linkVariants} initial="init" whileHover="after">Contact</motion.button>
            </motion.div>
        </motion.nav>
    )
}