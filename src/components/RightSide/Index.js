import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Styles.module.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { NavLink } from 'react-router-dom';
import {useIntl} from 'react-intl';
import classNames from 'classnames'
import Login from "../Login/Index"
import Modal from "../Items/modals"
import {LanguageChangeButton} from "../../Hooks"
import {logout} from "../../state/actions/auth"
const Header = (props) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);
    const [modal, modalSet] = useState("");
    const { preferences, auth} = useSelector(
      (state) => ({ 
        preferences: state.preferences,
        auth: state.auth,
      }), shallowEqual
    );
    return (
        <div className={styles.header}>
            <div className={styles.appBar}>
                <div className={styles.toolbar}>
                <div className={"language"}><LanguageChangeButton language={preferences.locale} /></div>
                    <List className={styles.list} component="nav" aria-label="main mailbox folders">
                        <ListItem component={NavLink} button classes={{ selected: styles.active }} to="/" >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={intl.formatMessage({id:"Home.anasayfa"})} />
                        </ListItem>
                        <ListItem component={NavLink} button classes={{ selected: styles.active }} to="/contact" >
                            <ListItemIcon>
                                <PermContactCalendarIcon />
                            </ListItemIcon>
                            <ListItemText primary={intl.formatMessage({id:"Home.iletisim"})} />
                        </ListItem>
                    </List>
                        <Divider />
                    <div className={styles.auth}>
                        {auth.userData.id ? 
                            <div  className={classNames("dropdown", dropdown ? "active" : "")}>
                                <div className={styles.userName} onClick={(e) => setDropdown(true)} >{auth.userData.name}</div>
                                <div className={"dropdown-menu left"}>
                                    <ul>
                                        <li>
                                            <span  className="a">{auth.userData.email}</span>
                                        </li>
                                        <li>
                                            <span  className="a">{intl.formatMessage({id:"Home.ayarlar"})}</span>
                                        </li>
                                        <li>
                                        <span  className="a" onClick={(e) => dispatch(logout(setDropdown))}>{intl.formatMessage({id:"Home.cikisYap"})}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown-bg" onClick={(e) => setDropdown(false)}></div>
                            </div>:
                        <div className={styles.login} onClick={(e) => modalSet(true)}>{intl.formatMessage({id:"Home.girisYap"})}</div>}
                    </div>
                </div>
            </div>

            {modal ? <Modal title="" content={<Login modal={modalSet} />} status={modal} width={500} close={(e) => modalSet("")} /> : ""}
        </div>

    );
};

export default Header;
