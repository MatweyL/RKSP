import React from "react";
import {useNavigate} from "react-router-dom";


const LogoutPage = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        props.setToken(null);
        navigate("/");
        window.location.reload();
    }

    return (
        <div style={{textAlign: 'center', marginTop: '10px'}}>
            <h1>Вы действительно хотите выйти из аккаунта?</h1>
            <button onClick={handleClick} type="button">Да</button>
        </div>
    );

};

export default LogoutPage;