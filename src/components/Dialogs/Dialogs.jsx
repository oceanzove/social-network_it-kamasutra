import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogues.map(
        d =>
            <DialogItem name={d.name} ico={d.ico} id={d.id}></DialogItem>
    );

    let messageElements = props.state.messages.map(
        m =>
            <Message message={m.message}/>
    )

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div >
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs