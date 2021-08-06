import state, {addPost, changeNewMessageText, changeNewPostText, sendMessage, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 changeText={changeNewPostText}
                 sendMessage={sendMessage}
                 changeMsgText={changeNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

