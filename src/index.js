import 'babel-polyfill';
import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import initStore from './store';
import Counter from './containers/Counter';

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);