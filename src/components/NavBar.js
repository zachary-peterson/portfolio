import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { linkVariants, navVariants } from './Animations'



export const NavBar = () => {
    const { push } = useHistory();

    return (
        <motion.nav className='navbar' variants={navVariants} initial="init" animate="after">
            <motion.button className='navbtn' onClick={() => push('/portfolio')} 
            variants={linkVariants} initial="init" whileHover="after">Portfolio</motion.button>
            <motion.button className='navbtn' onClick={() => push('/about')}
            variants={linkVariants} initial="init" whileHover="after">About</motion.button>
            <motion.button className='navbtn' onClick={() => push('/contact')}
            variants={linkVariants} initial="init" whileHover="after">Contact</motion.button>
        </motion.nav>
    )
}