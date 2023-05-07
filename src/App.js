import './App.css'
import React, {useState} from 'react';
import NavBar from './routes/NavBar';
import {useDispatch} from "react-redux";
import * as actions from "./store/actions";

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
}

function getIsApproved() {
    return sessionStorage.getItem('isApproved');
}

function setIsApproved(value) {
    sessionStorage.setItem('isApproved', value);
}

function getIsButtonPressed() {
    return sessionStorage.getItem('isButtonPressed');
}

function setIsButtonPressed(value) {
    sessionStorage.setItem('isButtonPressed', value);
}

function App() {
    // const [isApproved, setIsApproved] = useState(false);
    // const [isButtonPressed, setIsButtonPressed] = useState(false);
    const isApproved = getIsApproved();
    const isButtonPressed = getIsButtonPressed();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const localIsApproved = e.target.value === "on";
        if (localIsApproved) {
            dispatch(actions.approveTerms({'state': true}))
        } else {
            dispatch(actions.disapproveTerms({'state': false}))
        }
        setIsApproved(localIsApproved);
    };

    const handleClick = (e) => {
        setIsButtonPressed(true);
        window.location.reload();
    }

    return (
        <div className="App">

            {isApproved && isButtonPressed ? <NavBar getToken={getToken} token={getToken()} setToken={setToken}></NavBar>
                : <div className="terms">
                    <h2>Пользовательское соглашение</h2>
                    <div>Дальнейшее пользование сайтом возможно только после принятия условий пользовательского соглашения.</div>
                    <div>
                        <label>
                            <input type="checkbox"
                                   checked={isApproved}
                                   onChange={handleChange}/>
                            Я согласен с условиями пользовательского соглашения
                        </label>
                    </div>
                    <div>
                        <button type="submit" onClick={handleClick}>Продолжить работу с сайтом</button>
                    </div>
                </div>}
        </div>

  );
}

export default App;
