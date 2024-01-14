import React from 'react';
import styles from './Messenger.module.css'
import Message from "./Message/Message";

const Messenger = (props) => {

    let messagesElement = props.messages.map(
        m => <Message message={m.message}/>
    )

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <>
            <div className={styles.messenger}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </>
    );
};

export default Messenger
