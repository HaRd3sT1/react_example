import { createReducer } from 'redux-act';

import {
  AUTH_START,
  AUTH_END,
  AUTH_USER_DATA,
  AUTH_RESET,
  AUTH_FAIL
} from '../actions/auth';

const initialState = {
  userData: {
    id: null
  },
  loading: false,
  error: null
};

export const authReducer = createReducer(
  {
    [AUTH_START]: (state) => ({
      ...state,
      loading: true
    }),
    [AUTH_END]: (state) => ({
      ...state,
      loading: false
    }),
    [AUTH_USER_DATA]: (state, payload) => ({
      ...state,
      userData: payload,
      loading: false
    }),
    [AUTH_RESET]: (state, payload) => ({
      ...state,
      userData: {},
      loading: false
    }),
    [AUTH_FAIL]: (state, payload) => ({
      ...state,
      loading: false,
      error: payload.error
    })
  },
  initialState
);
