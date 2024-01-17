
let store = {
     _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are?', likesCount: 12},
                {id: 2, message: 'Its my second post', likesCount: 22},
                {id: 3, message: 'Its my first post', likesCount: 11},
            ],
            newPostText: 'zove road to grow up',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, ico: "https://i.pinimg.com/564x/59/78/51/597851f6d8f77eec967b9e940d61355c.jpg", name: 'Dimcho'},
                {id: 2, ico: "https://i.pinimg.com/564x/05/3e/46/053e46fc877d81873c1351650100b3f0.jpg", name: 'Andrew'},
                {id: 3, ico: "https://i.pinimg.com/564x/97/a1/6f/97a16f4977904694f6ea5e4c9be271da.jpg", name: 'Svea'},
                {id: 4, ico: "https://i.pinimg.com/564x/a5/b3/a4/a5b3a4517120532da4057942a56bf6c2.jpg", name: 'Via'},
                {id: 5, ico: "https://i.pinimg.com/564x/8c/00/eb/8c00eb3d3d28e048df2ec7fb4f2cedcb.jpg", name: 'Pyro'},
                {id: 6, ico: "https://i.pinimg.com/736x/2a/b2/98/2ab298634bdfc5b3ab941f63e947d800.jpg", name: 'Sergey'},
            ]
        }
    },
    _callSubscriber()  {
        console.log('state was changed')
    },
    getState() {
         return this._state;
    },
    addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    sendMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store
