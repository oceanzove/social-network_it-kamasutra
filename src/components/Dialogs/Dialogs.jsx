import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    let dialogues = [
        {id: 1, name: 'Dimcho'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Svea'},
        {id: 4, name: 'Via'},
        {id: 5, name: 'Pyro'},
        {id: 6, name: 'Sergey'},
    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up?"},
        {id: 2, message: "What's up?"},
        {id: 3, message: 'Hello World!'},
        {id: 3, message: 'Hello World!'},
    ]

    let dialogsElements = dialogues.map(
        d =>
            <DialogItem name={d.name} id={d.id}></DialogItem>
    );

    let messageElements = messages.map(
        m =>
            <Message message={m.message}/>
    )

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs