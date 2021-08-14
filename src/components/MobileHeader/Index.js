import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './Styles.module.scss';
import Menu from "../../assets/img/icons/menu.svg"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { useLocation } from 'react-router-dom'
import {FormattedMessage, useIntl} from 'react-intl';
import classNames from 'classnames'
import {logout} from "../../state/actions/auth"
import Login from "../Login/Index"
import Modal from "../Items/modals"

const MobileHeader = (props) => {
    const location = useLocation();
    const intl = useIntl();
    const dispatch = useDispatch();
    const [dropdown, setDropdown] = useState(false);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [modal, modalSet] = useState("");
    const { auth} = useSelector(
      (state) => ({ 
        auth: state.auth,
      }), shallowEqual
    );
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
        <div className={styles.headerPage}>
            <div className={styles.header}>
                <div className={styles.pageName}>
                <PageName />
                </div>
                <div className={styles.menuBtn} onClick={(e) => setDropdownMenu(true)}>
                    <img src={Menu} />
                </div>
            </div>
            <div className={classNames(styles.menu, dropdownMenu ? styles.active : "")}>
                <div className={styles.bg} onClick={(e) => setDropdownMenu(false)}></div>
                <div className={styles.list}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem component={NavLink}  onClick={(e) => setDropdownMenu(false)} button classes={{ selected: styles.active }} to="/" >
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={intl.formatMessage({id:"Home.anasayfa"})} />
                        </ListItem>
                        <ListItem component={NavLink} onClick={(e) => setDropdownMenu(false)} button classes={{ selected: styles.active }} to="/contact" >
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

export default MobileHeader;
