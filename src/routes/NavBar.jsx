import React from "react";
import {BrowserRouter as Router, Link, Navigate, Route, Routes,} from 'react-router-dom';
import PostsPage from "../components/PostsPage";
import MainPage from "../components/MainPage";
import AboutPage from "../components/AboutPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import {get_role_from_token} from "../services/utils";
import UsersPage from "../pages/UsersPage";


function RequireAuth({ children, redirectTo, isAuthenticated }) {
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

function RequireAdminAuth({ children, redirectToLogin, redirectToDefault, isAuthenticated, isAdmin }) {
    if (!isAuthenticated) {
        return <Navigate to={redirectToLogin} />;
    } else if (isAdmin) {
        return children;
    }
    else {
        return <Navigate to={redirectToDefault} />;
    }
}

const NavBar = (props) => {

    return (
        <Router>
            <nav style={{textAlign: 'center', marginTop: '10px'}}>
                    <Link className='nav-link' to={"/"}>Main</Link>
                    <Link className='nav-link' to={"/about"}>About</Link>
                    <Link className='nav-link' to={"/dialogs"}>Dialogs</Link>
                    {props.token != null ?
                        <Link className='nav-link' to={"/logout"}>Logout</Link>
                        :
                        <Link className='nav-link' to={"/login"}>Login</Link>}
                    {props.token != null && get_role_from_token(props.token) === 'admin' ?
                        <Link className='nav-link' to={'/users'}>Users</Link>
                        :
                        <span></span>
                    }
                    <hr></hr>
            </nav>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/about"} element={<AboutPage/>}/>
                <Route
                    path={"/dialogs"}
                    element={<RequireAuth redirectTo="/login" isAuthenticated={props.token != null}>
                        <PostsPage token={props.token}/>
                </RequireAuth>
                }/>
                <Route
                    path={"/users"}
                    element={<RequireAdminAuth redirectToLogin="/login" redirectToDefault="/dialogs" isAuthenticated={props.token != null} isAdmin={get_role_from_token(props.token) === "admin"}>
                        <UsersPage token={props.token}/>
                    </RequireAdminAuth>
                    }/>
                <Route
                    path={"/logout"}
                    element={<RequireAuth redirectTo="/login" isAuthenticated={props.token != null}>
                        <LogoutPage setToken={props.setToken}/>
                    </RequireAuth>
                }/>
                <Route
                    path={"/login"}
                    element={
                        <LoginPage isAuthenticated={props.token != null} setToken={props.setToken}/>
                    }/>
            </Routes>

        </Router>
    );
};

export default NavBar;