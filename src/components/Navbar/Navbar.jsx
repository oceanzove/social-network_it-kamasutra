import React from "react";
import styles from './Navbar.module.css'
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (<nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to="/profile"
                     className={location.pathname === '/profile' ? styles.active : undefined}
            > Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/dialogs"
                     className={location.pathname === '/dialogs' ? styles.active : undefined}
            > Messages</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/news'
                     className={location.pathname === '/news' ? styles.active : undefined}
            > News</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/music'
                     className={location.pathname === '/music' ? styles.active : undefined}
            > Music </NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/settings'
                     className={location.pathname === '/settings' ? styles.active : undefined}
            > Settings</NavLink>
        </div>
    </nav>)
}

export default Navbar