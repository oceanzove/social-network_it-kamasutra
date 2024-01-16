import React from 'react';
import styles from './Messenger.module.css'
import Message from "./Message/Message";

const Messenger = (props) => {

    let messagesElementU = props.messages.map(
        m => <Message className={styles.message.u} message={m.message}/>
    )
    let messagesElementM = props.messages.map(
        m => <Message className={styles.message.m} message={m.message}/>
    )

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    return (
        <>
            <div className={styles.messenger}>
                {messagesElementU}
                {messagesElementM}
            </div>
            <div>
                <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </>
    );
};

export default Messenger
