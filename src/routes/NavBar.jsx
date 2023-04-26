import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';
  import PostsPage from "../components/PostsPage";
import MainPage from "../components/MainPage";
import AboutPage from "../components/AboutPage";

const NavBar = (props) => {
    return (
    <Router>
        <nav style={{textAlign: 'center', marginTop: '10px'}}>
                <Link style={{marginLeft: '10px'}} to={"/"}>Main</Link>
                <Link style={{marginLeft: '10px'}} to={"/about"}>About</Link>
                <Link style={{marginLeft: '10px'}} to={"/dialogs"}>Dialogs</Link>
                <hr></hr>
        </nav>
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/about"} element={<AboutPage/>}/>
            <Route path={"/dialogs"} element={<PostsPage/>}/>
        </Routes>
        
    </Router>
);
};

export default NavBar;