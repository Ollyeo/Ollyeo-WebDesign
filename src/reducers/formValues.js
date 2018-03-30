import { createAction, handleActions } from 'redux-actions';
import { Record } from 'immutable';

// Define action type
const REGISTER_LOGIN_FORM = 'LoginForm/REGISTER_LOGIN_FORM';

export const registerLoginForm = createAction(REGISTER_LOGIN_FORM, form => form);

// Define the module's initial state using Record, immutable
const initialState = Record({
  loginForm: 0
})();

// Used "handleActions", instead of "switch case"
// Ref: https://velopert.com/3533
export default handleActions({
  [REGISTER_LOGIN_FORM]: (state, action) => state.set('loginForm', action.payload)
 }, initialState);