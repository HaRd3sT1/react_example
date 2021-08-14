import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LanguageWrapper from './Language';
import { configureStore } from './state/store';
import './index.scss';
import Router from './Router/Index';

const { store, persistor } = configureStore({});

const app = () => {
  return (
  <Provider store={store}>
    <LanguageWrapper>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </LanguageWrapper>
  </Provider>
  );
};

export default app
