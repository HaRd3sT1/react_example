import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.scss';
import LeftSide from "../LeftSide/Index"
import RightSide from "../RightSide/Index"
import Footer from "../Footer/Index"
import MobileHeader from "../MobileHeader/Index"

const Layout = ({ children }) => {
    if(window.innerWidth <= 768) {

        return (
            <div className={styles.layout}>
                <MobileHeader />
                <div className={styles.content}>
                            {children}
                            <Footer />
                </div>
            </div>
        );
    }
    return (
        <div className={styles.layout}>
            <LeftSide />
            <div className={styles.content}>
                <div style={{flex:1}}>
                    <div>
                        {children}
                        <Footer />
                    </div>
                </div>
                <RightSide />
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
