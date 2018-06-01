import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Layout from './compoents/Layout';
import Counter from './containers/Counter';
import Page2 from './containers/Page2';

const initRouter = () => {
  return <Router>
    <Layout>
      <Switch>
        <Route path="/page1" component={Counter} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Layout>
  </Router>
};

export default initRouter;