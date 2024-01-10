import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";
import Message from "./DialogItem/Message/Message";


const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Dimcho'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Svea'},
        {id: 4, name: 'Via'},
        {id: 5, name: 'Pyro'},
        {id: 6, name: 'Sergey'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up?"},
        {id: 3, message: 'Hello World!'},
    ]

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={styles.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    );
}

export default Dialogs