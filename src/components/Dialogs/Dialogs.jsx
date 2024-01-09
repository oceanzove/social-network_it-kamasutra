import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.dialog}>
                    <NavLink>Dimych</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink>Sveta</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink>Andrey</NavLink>
                </div>
                <div className={styles.dialog}>
                    <NavLink>Vika</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hi
                </div>
                <div className={styles.message}>
                    How are u
                </div>
                <div className={styles.message}>
                    Yaop
                </div>
            </div>
        </div>
    );
}

export default Dialogs