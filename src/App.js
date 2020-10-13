import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar, LogoUI, Landing } from './components/index';

function App() {
  return (
    <section className='main-container'>

      <NavBar />

      <Switch>
        <Route exact path='/' component={Landing} />
        <LogoUI />
      </Switch>

    </section>
  );
}

export default App;
