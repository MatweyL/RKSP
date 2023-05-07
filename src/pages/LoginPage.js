import React, {useState} from "react";
import {getUser} from "../services/auth";
import {useNavigate} from "react-router-dom";


const LoginPage = (props) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    if (props.isAuthenticated) {
        navigate('/dialogs');
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const user_data = await getUser({
            username,
            password
        });
        if (user_data.success) {
            const token = user_data.id + '_' + user_data.role;
            props.setToken(token);
            navigate("/dialogs");
            window.location.reload();
        }
        else {
            alert('Неверные данные аутентификации, попробуйте снова');
        }
    }

    return (<div style={{textAlign: 'center', marginTop: '10px'}}>
            <h1>Аутентификация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;