const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up?"},
        {id: 2, message: "What's up?"},
        {id: 3, message: 'Hello World!'},
        {id: 3, message: 'Hello World!'},
    ],
    newMessageText: '',
    dialogues: [
        {id: 1, ico: "https://i.pinimg.com/564x/59/78/51/597851f6d8f77eec967b9e940d61355c.jpg", name: 'Dimcho'},
        {id: 2, ico: "https://i.pinimg.com/564x/05/3e/46/053e46fc877d81873c1351650100b3f0.jpg", name: 'Andrew'},
        {id: 3, ico: "https://i.pinimg.com/564x/97/a1/6f/97a16f4977904694f6ea5e4c9be271da.jpg", name: 'Svea'},
        {id: 4, ico: "https://i.pinimg.com/564x/a5/b3/a4/a5b3a4517120532da4057942a56bf6c2.jpg", name: 'Via'},
        {id: 5, ico: "https://i.pinimg.com/564x/8c/00/eb/8c00eb3d3d28e048df2ec7fb4f2cedcb.jpg", name: 'Pyro'},
        {id: 6, ico: "https://i.pinimg.com/736x/2a/b2/98/2ab298634bdfc5b3ab941f63e947d800.jpg", name: 'Sergey'},
    ]
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messages: [...state.messages]
    }

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return state;
    }

};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});


export const updateNewMessageActionCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
);
export default dialogsReducer;
