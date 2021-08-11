import style from "./MessageBox.module.css"
import React from "react";

function MessageBox(props) {

    let sendMessage = () => {
        props.sendMessage();
    }

    let changeText = (event) => {
        let text = event.target.value;
        props.changeMessageText(text);
    }

    return (
      <div className={style.box}>
          <textarea onChange={changeText} value={props.defaultText} placeholder="Enter you message"></textarea>
          <button onClick={sendMessage}>Send</button>
      </div>
    );
}

export default MessageBox;