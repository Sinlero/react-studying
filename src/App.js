import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Menu/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Menu/Settings/Settings";
import Music from "./components/Menu/Music/Music";
import News from "./components/Menu/News/News";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Menu friends={props.state.dialogsPage.dialogsData}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                    <Route path="/profile"
                           render={ () => <Profile
                               state={props.state.profilePage}/> }/>
                    <Route path="/news" render={ () => <News/> }/>
                    <Route path="/music" render={ () => <Music/> }/>
                    <Route path="/settings" render={ () => <Settings/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
