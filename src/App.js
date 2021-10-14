import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
import Highlight from './pages/Highlight.js';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/highlight/:streamer'>
          <Highlight />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
