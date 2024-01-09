import React from "react";

import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={style.dialog}>
            <div className={style.dialogs}>
                <DialogItem/>
                <h1> 1</h1>
                <h1> 1</h1>
            </div>
        </div>
    );
}

export default Dialogs