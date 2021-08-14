import React from 'react';
import styles from './Style.module.scss';
import {useIntl} from 'react-intl';
const Index = () => {
  const intl = useIntl();
  return (
    <div id="home" className={styles.home}>
      <div className={styles.searchResult}>
        <h3 className={styles.title}>{intl.formatMessage({id:"Home.anasayfa"})}</h3>
        <div>
          <p>{intl.formatMessage({id:"Home.text1"})}</p>
          <p>{intl.formatMessage({id:"Home.text2"})}</p>
          <p>{intl.formatMessage({id:"Home.text3"})}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
