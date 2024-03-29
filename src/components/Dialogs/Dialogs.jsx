import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessengerContainer from "./Messenger/MessengerContainer";


const Dialogs = (props) => {
    let dialogsElements = props.dialogues.map(d => <DialogItem name={d.name} ico={d.ico} key={d.id} id={d.id}/>);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <MessengerContainer/>
            </div>
        </div>
    )
};

export default Dialogs
