import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from "framer-motion";
import { logoVars } from './Animations';
import { Projects, About, Contact } from './index';

import logo from './assets/logo-no-bg.png';
import logo100 from './assets/logo-no-bg-100.png';
import logo400 from './assets/logo-no-bg-400.png';

export const LogoUI = () => {
    const { push } = useHistory();

    return (
        <div className='UI'>
        <div className='logo-holder'>
            <motion.img className='logo' src={logo400} alt='logo' onClick={() => push('/')} 
            variants={logoVars} initial='init' animate='after'/>
        </div>
            <Route path='/portfolio' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />

        </div>
    )
}