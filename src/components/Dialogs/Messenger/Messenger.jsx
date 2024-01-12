import React from 'react';
import styles from './Messenger.module.css'
import Message from "./Message/Message";

const Messenger = (props) => {

    let messagesElement = props.messages.map(
        m => <Message message={m.message}/>
    )

    return (
        <div className={styles.messenger}>
            {messagesElement}
        </div>
    );
};

export default Messenger
