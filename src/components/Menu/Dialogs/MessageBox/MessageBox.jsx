import style from "./MessageBox.module.css"
import React from "react";
import {changeNewMessageTextActionCreator, sendMessageActionCreator} from "../../../../redux/state";

function MessageBox(props) {

    let messageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let changeText = () => {
        let text = messageElement.current.value;
        props.dispatch(changeNewMessageTextActionCreator(text));
    }

    return (
      <div className={style.box}>
          <textarea onChange={changeText} ref={messageElement} value={props.defaultText}></textarea>
          <button onClick={sendMessage}>Send</button>
      </div>
    );
}

export default MessageBox;