import './App.css'
import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import PostsPage from "./components/PostsPage";
import PostForm from "./components/PostForm";

function App() {

  return (

            <div className="App">
                <Router>
                    <Routes>
                        <Route path={"/"} element={<PostsPage/>}/>
                        <Route path={"/dialogs"} element={<div>Dialogs</div>}/>
                    </Routes>
                </Router>
                {/*<nav>*/}
                {/*    <Link to={"/"}>Posts</Link>*/}
                {/*        <Link to={"/dialogs"}>Dialogs</Link>*/}
                {/*</nav>*/}
            </div>

  );
}

export default App;
