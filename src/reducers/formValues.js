// https://redux-actions.js.org/docs/api/
import { createAction, handleActions } from 'redux-actions';

// Define action type
const REGISTER_OBJ_FORM = 'ObjForm/REGISTER_OBJ_FORM2';

export const registerObjForm = createAction(
	REGISTER_OBJ_FORM, objForm => objForm);

const initialState = {
    objForm: 0,
};

	
export default handleActions({
  [REGISTER_OBJ_FORM]: (state, action) => {
    return { objForm: action.payload };
  }
}, initialState);