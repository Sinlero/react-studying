import style from "./Dialogs.module.css"
import MessageBox from "./MessageBox/MessageBox";
import {Layout} from 'antd';

function Dialogs(props) {

    return (
        <div className={style.dialogs}>

            <Layout>
                <Layout.Sider>
                    <div className={style.dialogsItems}>
                        {props.dialogsElements}
                    </div>
                </Layout.Sider>
                <Layout>
                    <Layout.Content>
                        <div className={style.messages}>
                            {props.messagesElements}
                        </div>
                    </Layout.Content>
                    <Layout.Footer>
                        <div className={style.messageBoxLayout}>
                            <MessageBox sendMessage={props.sendMessage} changeMessageText={props.changeMessageText}
                                        defaultText={props.newMessageText}/>
                        </div>
                    </Layout.Footer>
                </Layout>

            </Layout>

        </div>
    );
}

export default Dialogs;