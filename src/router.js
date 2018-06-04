import React from 'react';
import createHashHistory from 'history/createHashHistory';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';

import Layout from './compoents/Layout';
import Counter from './containers/Counter';
import Page2 from './containers/Page2';

const hashHistory = createHashHistory();

const initRouter = (store) => {
  const history = syncHistoryWithStore(hashHistory, store);
  return (<Router history={history}>
    <Layout>
      <Switch>
        <Route path="/page1" component={Counter} />
        <Route path="/page2" component={Page2} />
      </Switch>
    </Layout>
  </Router >);
};

export default initRouter;