import { createAction, handleActions } from 'redux-actions';

// Define action type
const REGISTER_FORM = 'LoginForm/REGISTER_FORM';

// // Create action
// export const registerForm = createAction(REGISTER_FORM);

// Define the module's initial state
const initialState = {
  formLoginForm: 0
};

export default handleActions({
  [REGISTER_FORM]: ({ obj_form }) => {{ formLoginForm: obj_form });
 }, initialState);