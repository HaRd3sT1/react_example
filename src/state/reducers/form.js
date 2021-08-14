import { createReducer } from 'redux-act';

import {
    FORM_DATA,
    FORM_FAIL,
    FORM_START,
    FORM_END
} from '../actions/form';
const initialState = {};

const formReducer = createReducer(
  {
    [FORM_DATA]: (state, payload) => {
      return ({ ...state, ...payload })
    },
    [FORM_START]: (state, payload) => ({
      ...state,
      loading: true
    }),
    [FORM_END]: (state, payload) => ({
      ...state,
      loading: false
    }),
    [FORM_FAIL]: (state, payload) => ({
      ...state,
      loading: false,
      error: payload.error
    })
  },
  initialState
);

export default formReducer