import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { logoVars } from './Animations'

import logo from './assets/logo-no-bg.png';
import logo400 from './assets/logo-no-bg-400.png';
import profilePic from './assets/profile.jpeg';
import pp360 from './assets/profile-360.png';
import pp180 from './assets/profile-180.png';

export const About = () => {
    const { push } = useHistory();

    return (
        <motion.div className='pp-container'>
            <motion.div className='pp-upper'>
                <motion.img className='pp' src={pp360} alt='profile picture - Zachary Peterson' />
                <motion.div className='pp-text'>
                    <motion.p><strong>HELLO</strong><br/>my name is:</motion.p>
                    <motion.h2 className='pp-h2'>Zachary Peterson</motion.h2>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}