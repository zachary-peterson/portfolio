import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";

import logo from './assets/logo-no-bg.png';
import logo400 from './assets/logo-no-bg-400.png';

export const Projects = () => {
    const { push } = useHistory();

    return (
        <>
            <motion.img className='logo' src={logo400} alt='logo' onClick={() => push('/')} />
        </>
    )
}