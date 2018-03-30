import { combineReducers } from 'redux';
import formValues from './formValues';

// Configuration for modularization (Exception of the first rule of REDUX)
const reduxConfig = () => {
  const store = createStore(rootReducer);
  return store;
};

// Root Reducer
const rootReducer = combineReducers({
  formValues
});

// store
export default reduxConfig;