import style from "./MessageBox.module.css"
import React from "react";

function MessageBox(props) {

    let messageElement = React.createRef();

    let sendMessage = () => {
        props.sendMsg();
        props.changeText("");
    }

    let changeText = () => {
        let text = messageElement.current.value;
        props.changeText(text);
    }

    return (
      <div className={style.box}>
          <textarea onChange={changeText} ref={messageElement} value={props.defaultText}></textarea>
          <button onClick={sendMessage}>Send</button>
      </div>
    );
}

export default MessageBox;