/* eslint import/no-extraneous-dependencies: 0 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from '../Reducers';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = () => createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
);

export default configureStore;
