// https://redux-actions.js.org/docs/api/
import { createAction, handleActions } from 'redux-actions';
import { userService } from '../services';

// Define action type
const REGISTER_REQUEST = 'Registration/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'Registration/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'Registration/REGISTER_FAILURE';

export const registerRequest = createAction(REGISTER_REQUEST);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const registerFailure = createAction(REGISTER_FAILURE);

const initialState = {
};

export default handleActions(
	{
		REGISTER_REQUEST: (state, action) => ({
			registering: true,
			user: action.user
		}),
		
		REGISTER_SUCCESS: (state, action) => ({}),
		
		REGISTER_FAILURE: (state, action) => ({})
 	},
	initialState
);