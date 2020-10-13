import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { neon, subs, subsDev, leterOne, leterTwo, leterThree } from './Animations'

export const Landing = () => {

    return (
        <div className='container'>
                <motion.h1 className='neon' variants={neon} initial='init' animate='after'>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>Z</motion.span>
                    <motion.span className='bulb' variants={leterTwo} initial='init' animate='after'>A</motion.span>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>C</motion.span>
                    <motion.span className='bulb' variants={leterThree} initial='init' animate='after'>H</motion.span>
                    <motion.span className='bulb' variants={leterTwo} initial='init' animate='after'>A</motion.span>
                    <motion.span className='bulb' variants={leterThree} initial='init' animate='after'>R</motion.span>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>Y</motion.span>
                <br/>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>P</motion.span>
                    <motion.span className='bulb' variants={leterTwo} initial='init' animate='after'>E</motion.span>
                    <motion.span className='bulb' variants={leterThree} initial='init' animate='after'>T</motion.span>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>E</motion.span>
                    <motion.span className='bulb' variants={leterThree} initial='init' animate='after'>R</motion.span>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>S</motion.span>
                    <motion.span className='bulb' variants={leterOne} initial='init' animate='after'>O</motion.span>
                    <motion.span className='bulb' variants={leterTwo} initial='init' animate='after'>N</motion.span>
                </motion.h1>
        </div>
    )
}