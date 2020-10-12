import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { logoVars } from './Animations'

import logo from './assets/logo-no-bg.png';
import logo400 from './assets/logo-no-bg-400.png';

export const About = () => {
    const { push } = useHistory();

    return (
        <>
            {/* <motion.img className='logo' src={logo400} alt='logo' onClick={() => push('/')} variants={logoVars} initial='init' animate='after' /> */}
        </>
    )
}