import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogues = [
    {id: 1, name: 'Dimcho'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Svea'},
    {id: 4, name: 'Via'},
    {id: 5, name: 'Pyro'},
    {id: 6, name: 'Sergey'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: "What's up?"},
    {id: 2, message: "What's up?"},
    {id: 3, message: 'Hello World!'},
    {id: 3, message: 'Hello World!'},
]

let posts = [
    {id: 1, message: 'Hi how are?', likesCount: 12},
    {id: 2, message: 'Its my second post', likesCount: 22},
    {id: 3, message: 'Its my first post', likesCount: 11},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App  dialogues={dialogues} messages={messages} posts={posts}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
