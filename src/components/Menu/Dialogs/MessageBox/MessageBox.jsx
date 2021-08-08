import style from "./MessageBox.module.css"
import React from "react";
import {changeNewMessageTextActionCreator, sendMessageActionCreator} from "../../../../redux/dialogsReducer";

function MessageBox(props) {

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let changeText = (event) => {
        let text = event.target.value;
        props.dispatch(changeNewMessageTextActionCreator(text));
    }

    return (
      <div className={style.box}>
          <textarea onChange={changeText} value={props.defaultText} placeholder="Enter you message"></textarea>
          <button onClick={sendMessage}>Send</button>
      </div>
    );
}

export default MessageBox;