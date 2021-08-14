import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { preferencesReducer } from './preferences';
import form from './form';
import { authReducer } from './auth';

export default combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage,
      blacklist: ['error', 'loading'],
    },
    authReducer
  ),
  form: persistReducer(
    { key: 'form', storage },
    form
  ),
  preferences: persistReducer(
    { key: 'preferences', storage },
    preferencesReducer
  ),
});
