import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import initStore from './store';
import initRouter from './router';

const store = initStore();
const routers = initRouter(store);

ReactDOM.render(
  <Provider store={store}>
    {routers}
  </Provider>,
  document.getElementById('root')
);