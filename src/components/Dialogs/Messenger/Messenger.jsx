import React from 'react';
import styles from './Messenger.module.css'
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";

const Messenger = (props) => {

    let messagesElementU = props.messages.map(
        m => <Message className={styles.message.u} message={m.message}/>
    )
    let messagesElementM = props.messages.map(
        m => <Message className={styles.message.m} message={m.message}/>
    )

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
         let text = e.target.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }


    return (
        <>
            <div className={styles.messenger}>
                {messagesElementU}
                {messagesElementM}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={onMessageChange}
                 placeholder='Enter your message'></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </>
    );
};

export default Messenger
