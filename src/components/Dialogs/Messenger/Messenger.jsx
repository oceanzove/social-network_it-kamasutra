import React from 'react';
import styles from './Messenger.module.css'
import Message from "./Message/Message";

const Messenger = (props) => {

    let messagesElementU = props.dialogsPage.messages.map(
        m => <Message className={styles.message.u} message={m.message}/>
    )
    let messagesElementM = props.dialogsPage.messages.map(
        m => <Message className={styles.message.m} message={m.message}/>
    )

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
         let text = e.target.value;
         props.updateNewMessageText(text);
    }


    return (
        <>
            <div className={styles.messenger}>
                {messagesElementU}
                {messagesElementM}
            </div>
            <div>
                <textarea value={props.dialogsPage.newMessageText} onChange={onNewMessageChange}
                 placeholder='Enter your message'></textarea>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
        </>
    );
};

export default Messenger
