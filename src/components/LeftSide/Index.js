import React from 'react';
import styles from './Styles.module.scss';
import Logo from "../../assets/img/logo.svg"
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import {FormattedMessage} from 'react-intl';

const LeftSide = (props) => {
    const location = useLocation();
    console.log(location.pathname);
    const PageName = () =>{
        switch (location.pathname) {
            case "/":
                return <FormattedMessage id="Home.anasayfa" />
                case "/contact":
                    return <FormattedMessage id="Home.iletisim" />
            default:
                return <FormattedMessage id="Home.anasayfa" />
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.appBar}>
                <div className={styles.toolbar}>
                    <NavLink to="/" className={styles.logo} >
                        <img src={Logo} alt="" />
                    </NavLink>
                    <span className={styles.point}></span>
                    <div className={styles.pageName}>
                    <PageName />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeftSide;
