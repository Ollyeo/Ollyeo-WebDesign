// https://redux-actions.js.org/docs/api/
import { createAction, handleActions } from 'redux-actions';

// Define action type
const REGISTER_LOGIN_FORM = 'LoginForm/REGISTER_LOGIN_FORM';

export const registerLoginForm = createAction(
	REGISTER_LOGIN_FORM, loginForm => loginForm);

const initialState = {
    loginForm: 0
};

	
export default handleActions({
  [REGISTER_LOGIN_FORM]: (state, action) => {
    return { loginForm: action.payload };
  }
}, initialState);