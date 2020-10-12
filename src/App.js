import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar, LogoUI, Landing } from './components/index';

function App() {
  return (
    <>
    <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <LogoUI />
        {/* <Route exact path='/' component={Landing} /> */}
      </Switch>
    </>
  );
}

export default App;
