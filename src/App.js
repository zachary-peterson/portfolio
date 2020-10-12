import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar, Projects, About, Contact, Landing } from './components/index';

import './App.css';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route path='/portfolio' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/' component={Landing} />
      </Switch>
    </>
  );
}

export default App;
