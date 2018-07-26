// Import modules ==============================================================
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import components ===========================================================
import Footer from 'component/layout/Footer';
import Header from 'component/layout/Header';
import Home from 'component/view/Home';
import NotFound from 'component/view/NotFound';

export const Root = () => {
  return (
    <Router>
      <Switch>
        <Header />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
        {/* <Footer /> */}
      </Switch>
    </Router>
  );
};

Root.displayName = 'Root';

export default Root;
