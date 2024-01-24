import React from 'react';
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import StoreContext from "../../../StoreContext";

const MessengerContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage;
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                let onMessageChange = (text) => {
                    let action = updateNewMessageActionCreator(text);
                    store.dispatch(action);
                }
                return (
                    <Messenger updateNewMessageText={onMessageChange} sendMessage={sendMessage}
                               dialogsPage={state}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default MessengerContainer
