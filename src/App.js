import './App.css'
import React from 'react';
import NavBar from './routes/NavBar';

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}


function App() {

    return (

            <div className="App">
                <NavBar getToken={getToken} token={getToken()} setToken={setToken}></NavBar>
            </div>

  );
}

export default App;
