import React from "react";

import styles from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={styles.dialog}>
            <img src={props.ico} alt={null}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem