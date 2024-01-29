import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/dialogsReducer";
import Messenger from "./Messenger";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            let action = updateNewMessageActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        }
    }
}

const MessengerContainer = connect(mapStateToProps,mapDispatchToProps)(Messenger);

export default MessengerContainer
