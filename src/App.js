import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Menu/Settings/Settings";
import Music from "./components/Menu/Music/Music";
import News from "./components/Menu/News/News";
import DialogsContainer from "./components/Menu/Dialogs/DialogsContainer";
import UsersContainer from "./components/Menu/Users/UsersContainer";
import style from'./App.less';
import {Layout} from 'antd';
import ProfileContainer from "./components/Profile/ProfileContainer";

const {Sider, Content} = Layout;

function App(props) {
    return (
        <BrowserRouter>
            <Layout>
                <div className="app-wrapper">
                    <Layout.Header><Header/></Layout.Header>
                    <Layout>
                        <Sider className={style.sider}><Menu/></Sider>
                        <Content>
                            <div className="app-wrapper-content">
                                <Route path="/dialogs"
                                       render={() => <DialogsContainer/>}/>
                                <Route path="/profile/:id?"
                                       render={() => <ProfileContainer/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/settings" render={() => <Settings/>}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                            </div>
                        </Content>
                    </Layout>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
