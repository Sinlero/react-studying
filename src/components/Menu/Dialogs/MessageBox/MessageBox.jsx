import style from "./MessageBox.module.css"
import React from "react";

function MessageBox(props) {

    let messageElement = React.createRef();

    let sendMessage = () => {
        let text = messageElement.current.value;
        alert(text);
    }

    return (
      <div className={style.box}>
          <textarea ref={messageElement}></textarea>
          <button onClick={sendMessage}>Send</button>
      </div>
    );
}

export default MessageBox;