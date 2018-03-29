import { createStore } from 'redux';
import rootReducer from './src/reducers';

export const reduxConfig = () => {
  const store = createStore(rootReducer);
  return store;
};