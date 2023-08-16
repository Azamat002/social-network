import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav stateNav={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        {/*<Route path='/dialogs' render={() => {<Dialogs/>}}/>*/}
                        <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='/profile'
                               element={<Profile profilePage={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPost={props.updateNewPost}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
}


export default App;

