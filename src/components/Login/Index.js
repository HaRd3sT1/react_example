import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Style.module.scss';
import Input from "../Items/input"
import {loginAuth} from "../../state/actions/auth"
import {ButtonSuccess} from "../Items/buttons"
import {FormattedMessage} from 'react-intl';
import {LanguageChangeButton} from "../../Hooks"
const Login = ({modal}) => {
    const { loading, preferences } = useSelector(
        (state) => ({
        loading: state.auth.loading,

        preferences: state.preferences
        }), shallowEqual
    );

    const dispatch = useDispatch();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(loginAuth(modal));
    };
    return (
        <div className={styles.content}>
            <form onSubmit={onSubmitHandler}>
                <div className={styles.title}>
                <h4><FormattedMessage id="Home.girisYap" /> </h4>
                <LanguageChangeButton language={preferences.locale} />
                </div>
                
                <Input name="name" type="text" label={<FormattedMessage id="Home.name" />} required={true} />
                <Input name="email" type="email" label={<FormattedMessage id="Home.email" />} required={true} />
                <Input name="password" type="password" label={<FormattedMessage id="Home.sifre" />} required={true} />
                <ButtonSuccess style={{fontSize:16, textTransform:"uppercase", borderRadius:3, fontWeight:"500", marginBottom:0}} text={<FormattedMessage id="Home.girisYap" />} loading={loading ? "true" : ""} disabled={loading} />
                <p style={{textAlign:"center"}}>
                    <FormattedMessage id="Home.hesabinizYokMu" />
                    <span style={{color: "#3ab69f",fontWeight: 500,marginLeft: 5}}><FormattedMessage id="Home.kayitOl" /></span>
                </p>
            </form>
        </div>
    );
};

export default Login;