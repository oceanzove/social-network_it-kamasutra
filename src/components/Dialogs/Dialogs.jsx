import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messenger from "./Messenger/Messenger";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogues.map(
        d =>
            <DialogItem name={d.name} ico={d.ico} id={d.id}/>
    );

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <Messenger messages={props.state.messages} newMessageText={props.state.newMessageText}
                           dispatch={props.dispatch} />
            </div>
        </div>
    );
}

export default Dialogs
