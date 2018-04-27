import { combineReducers } from 'redux';

import formValues from './rdFormValues';
import authentication from './rdAuthentication';
import registration from './rdRegistration';

// Root Reducer
export const rootReducer = combineReducers({
  formValues,
  authentication,
  registration
});