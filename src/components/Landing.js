import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { name, subs, subsDev, leterOne, leterTwo, leterThree } from './Animations'

export const Landing = () => {

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
      }

    return (
        <motion.div
            className='container'
            initial={{ }}
            animate={{ }}>

        <div className='landing-name'>
            <motion.a className='title' variants={name} initial='init' whileHover='after' target='_blank' href={'https://www.linkedin.com/in/zacharytpeterson/'}>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>Z</motion.span>
                <motion.span className='title' variants={leterTwo} initial='init' animate='after'>a</motion.span>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>c</motion.span>
                <motion.span className='title' variants={leterThree} initial='init' animate='after'>h</motion.span>
                <motion.span className='title' variants={leterTwo} initial='init' animate='after'>a</motion.span>
                <motion.span className='title' variants={leterThree} initial='init' animate='after'>r</motion.span>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>y</motion.span>
                <span> </span><br/>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>P</motion.span>
                <motion.span className='title' variants={leterTwo} initial='init' animate='after'>e</motion.span>
                <motion.span className='title' variants={leterThree} initial='init' animate='after'>t</motion.span>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>e</motion.span>
                <motion.span className='title' variants={leterThree} initial='init' animate='after'>r</motion.span>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>s</motion.span>
                <motion.span className='title' variants={leterOne} initial='init' animate='after'>o</motion.span>
                <motion.span className='title' variants={leterTwo} initial='init' animate='after'>n</motion.span>
            </motion.a>
        </div>

        <div className='boxOne'></div>
        
        <div className='angle'>
            <motion.h2 className='subtext' variants={subs} initial='init' animate='after'>
                &nbsp;&nbsp;Design&nbsp;
            </motion.h2>
        </div>

        <div className='landing-bot'>
            <motion.h2 className='subtitle' variants={subsDev} initial='init' animate='after' whileHover='hover' onClick={()=> window.open("https://github.com/zachary-peterson", "_blank")}>
                Development&nbsp;&nbsp;&nbsp;&nbsp;
            </motion.h2>
            &nbsp;&nbsp;&nbsp;
            <motion.h2 className='bot' variants={subs} initial='init' animate='after'>&</motion.h2>

        </div>

        <div className='boxThree'></div>
        <div className='boxFour'></div>

        </motion.div>
    )
}