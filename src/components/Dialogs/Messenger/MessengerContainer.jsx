import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";

const MessengerContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    }


    return (
       <Messenger updateNewMessageText={onMessageChange} sendMessage={sendMessage}
       dialogsPage={state}/>
    );
};

export default MessengerContainer
