import style from "./MessageBox.module.css"
import React from "react";
import {Button, Col, Input, Row} from "antd";
import {SendOutlined} from "@ant-design/icons";

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
          <Row gutter={[8, 8]}>
              <Col span={20} > <Input.TextArea autoSize={true} onChange={changeText} placeholder="Enter you message" value={props.defaultText}/> </Col>
              <Col span={4} ><Button className={style.postButton} type="primary" onClick={sendMessage} icon={<SendOutlined />}>Send</Button></Col>
          </Row>
      </div>
    );
}

export default MessageBox;