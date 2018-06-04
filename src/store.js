import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware as createRouterMiddleware, routerReducer } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export default function initStore(initialState) {

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(routerMiddleware, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return {
    ...store,
    runSaga: sagaMiddleware.run
  }
}