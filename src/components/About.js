import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { aboutDiv } from './Animations'

import logo from './assets/logo-no-bg.png';
import logo400 from './assets/logo-no-bg-400.png';
import profilePic from './assets/profile.jpeg';
import pp360 from './assets/profile-360.png';
import pp180 from './assets/profile-180.png';

export const About = () => {
    const { push } = useHistory();

    return (
        <div className='about-UI'>
        <motion.div className='pp-container' variants={aboutDiv} initial='init' animate='after'>
            <motion.div className='pp-upper'>
                <motion.img className='pp' src={pp360} alt='profile picture - Zachary Peterson' />
                <div className="spacer"></div>
                <motion.div className='pp-text'>
                    <motion.p><strong>HELLO</strong><br/>my name is:</motion.p>
                    <motion.h2 className='pp-h2'>Zachary Peterson</motion.h2>
                </motion.div>
            </motion.div>
        </motion.div>

        <motion.div className='skills-container' variants={aboutDiv} initial='init' animate='after'>
        <motion.div className='skills-lists'>
            <motion.h3 className='skills-h3'>Skilled At:</motion.h3>
            <motion.ul className='skills-ul'>
                <motion.li className='skill'>JavaScript</motion.li>
                <motion.li className='skill'>Java</motion.li>
                <motion.li className='skill'>React</motion.li>
                <motion.li className='skill'>Redux</motion.li>
                <motion.li className='skill'>HTML</motion.li>
                <motion.li className='skill'>CSS</motion.li>
            </motion.ul>
        </motion.div>
        <motion.div className='certs'>
            <motion.h3 className='skills-h3'>Certificates:</motion.h3>
            <motion.ul className='cert'>
                <motion.li className='cert-li'><strong>'Front-End Web Development'</strong><br/>
                <a className='cert-a' target='_blank' href='https://generalassemb.ly/education/front-end-web-development/'>
                General Assembly</a>,<br/>
                <em>Jan. 2016</em>
                </motion.li>
                <motion.li className='cert-li'><strong>'Full-Stack Web Development'</strong><br/>
                <a className='cert-a' target='_blank' href='https://generalassemb.ly/education/front-end-web-development/'>
                Lambda School</a>,<br/>
                <em>In Progress</em>
                </motion.li>
            </motion.ul>
        </motion.div>
        </motion.div>
        </div>
    )
}