// https://redux-actions.js.org/docs/api/
import { createAction, handleActions } from 'redux-actions';
import { userService } from '../services/svUser';

// Define action type
const LOGIN_REQUEST = 'Authentication/USERS_LOGIN_REQUEST';
const LOGIN_SUCCESS = 'Authentication/USERS_LOGIN_SUCCESS';
const LOGIN_FAILURE = 'Authentication/USERS_LOGIN_FAILURE';
const LOGOUT = 'Authentication/USERS_LOGOUT';
 
export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);
export const logout = createAction(LOGOUT);

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default handleActions(
	{				
		[LOGIN_REQUEST]: (state, action) => {
			console.log("In LOGIN_REQUEST, handleActions", state, action);
			return {
				loggingIn: true,
				user: action.payload
			};
		},
		
		[LOGIN_SUCCESS]: (state, action) => {
			console.log("In LOGIN_SUCCESS, handleActions", state, action);
			return {
				loggedIn: true,
				user: action.payload
			};
		},
		
		[LOGIN_FAILURE]: (state, action) => {
			console.log("In LOGIN_FAILURE, handleActions", state, action);
			return {};
		},
		
		[LOGOUT]: (state, action) => {
			console.log("In LOGOUT, handleActions", state, action);
			userService.logout();
			return {};
		}
 	},
	initialState
);