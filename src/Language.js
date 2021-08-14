import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { setUserLocale } from './state/actions/preferences.js';
import { availableLocales, browserLocale, languages } from './Utils';

const LanguageWrapper = ({ children }) => {
  const dispatch = useDispatch();

  let { locale } = useSelector(
    (state) => ({
      locale: state.preferences.locale,
    }),
    shallowEqual
  );

  if (!locale) {
    //browser dilini kontrol et yoksa en yap
    locale = availableLocales.includes(browserLocale) ? browserLocale : 'en';
    // locale = 'en';
    dispatch(setUserLocale(locale));
  }

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="tr"
      messages={languages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageWrapper;
