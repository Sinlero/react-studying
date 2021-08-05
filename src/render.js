import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewMessageText, changeNewPostText, sendMessage} from "./redux/state";

export let rerenderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props}
                 addPost={addPost}
                 changeText={changeNewPostText}
                 sendMessage={sendMessage}
                 changeMsgText={changeNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
