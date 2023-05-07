import React, {useEffect, useState} from "react";
import {getUsers} from "../services/users";
import UsersList from "../components/UsersList";


const UsersPage = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => {
            setUsers(data.users);
        })
    }, []);
    return (
        <div style={{textAlign: 'center', marginTop: '10px'}}>
            <h1>Пользователи системы</h1>
            <UsersList users={users}/>
        </div>
    );

};

export default UsersPage;