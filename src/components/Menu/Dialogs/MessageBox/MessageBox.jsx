import style from "./MessageBox.module.css"
import React from "react";

function MessageBox(props) {

    let messageElement = React.createRef();

    let sendMessage = () => {
        props.dispatch({type: "SEND-MESSAGE"});
    }

    let changeText = () => {
        let text = messageElement.current.value;
        props.dispatch({type: "CHANGE-NEW-MESSAGE-TEXT", newText: text});
    }

    return (
      <div className={style.box}>
          <textarea onChange={changeText} ref={messageElement} value={props.defaultText}></textarea>
          <button onClick={sendMessage}>Send</button>
      </div>
    );
}

export default MessageBox;