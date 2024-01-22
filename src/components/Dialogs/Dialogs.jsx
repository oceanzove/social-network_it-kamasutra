import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessengerContainer from "./Messenger/MessengerContainer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogues.map(
        d =>
            <DialogItem name={d.name} ico={d.ico} id={d.id}/>
    );

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <MessengerContainer store={props.store} />
            </div>
        </div>
    );
}

export default Dialogs
