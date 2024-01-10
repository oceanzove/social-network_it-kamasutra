import React from "react";

import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";
import Message from "./DialogItem/Message/Message";



const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Sveta' id='2'/>
                <DialogItem name='Andrey' id='3'/>
                <DialogItem name='Vika' id='4'/>
                <DialogItem name='Pyro' id='5'/>
                <DialogItem name='Ser' id='6'/>
            </div>
            <div className={styles.messages}>
                <Message message='Hi'/>
                <Message message="Whats up bro?"/>
                <Message message="Yeap"/>
            </div>
        </div>
    );
}

export default Dialogs