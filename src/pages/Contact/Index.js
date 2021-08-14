import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Style.module.scss';
import Input from "../../components/Items/input"
import CountrySelect from "../../components/Items/countrySelect"
import Textarea from "../../components/Items/textarea"
import {ButtonSuccess} from "../../components/Items/buttons"
import {sendContact} from "../../state/actions/form"
// eslint-disable-next-line import/no-webpack-loader-syntax
import {FormattedMessage, useIntl} from 'react-intl';
 

const Index = () => {
  const { loading} = useSelector(
    (state) => ({
      loading: state.auth.loading,
    }), shallowEqual
  );
  const intl = useIntl();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(sendContact(intl));
  };

  return (
    <div id="about" className={styles.Content}>
            <h1 className={styles.title}><FormattedMessage id="Home.iletisim" /></h1>
            <div className={styles.content}>
                <div className={styles.left}>
                    <form onSubmit={onSubmitHandler}>
                        <Input name="name" type="text" label={<FormattedMessage id="Home.name" />} />
                        <Input name="email" type="email" label={<FormattedMessage id="Home.email" />} />
                        <Input name="phone" type="number" label={<FormattedMessage id="Home.telefon" />} />
                        <CountrySelect name="country" label={<FormattedMessage id="Home.ulke" />} />
                        <Textarea name="meessage" label={<FormattedMessage id="Home.mesaj" />} />
                        <ButtonSuccess style={{fontSize:16, textTransform:"uppercase", borderRadius:3, fontWeight:"500", width:250}} classnamess="mt-4" text={<FormattedMessage id="Home.gonder" />} loading={loading ? "true" : ""} disabled={loading} />
                    </form>
                </div>
        </div>
    </div>
  );
};

export default Index;
