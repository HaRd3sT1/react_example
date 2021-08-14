import { createAction } from 'redux-act';

export const AUTH_START = createAction('AUTH_START');
export const AUTH_END = createAction('AUTH_END');
export const AUTH_FAIL = createAction('AUTH_FAIL');
export const AUTH_RESET = createAction('AUTH_RESET');
export const AUTH_USER_DATA = createAction('AUTH_USER_DATA');

const logout = (setDropdown) => {
  return async (dispatch) => {
    if(setDropdown){
      setDropdown(false)
    }
    dispatch(AUTH_USER_DATA({
      id:"",
      email:"",
      name:""
    }))
  };
};

const loginAuth = (modal) => {
    return async (dispatch, getState) => {
      const { email, name } = getState().form;

      dispatch(AUTH_USER_DATA({
        id:"123",
        email:email,
        name:name
      }))
      modal(false);
    };
  };
    

export { logout, loginAuth,};
