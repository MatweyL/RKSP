import React from "react";


const User = (props) => {

    return (
        <div className='user'>

            <h3>Пользователь</h3>
            <div className='user-row'>
                <span className='user-row__title'>id</span><span>{props.user.id}</span>
            </div>
            <div className='user-row'>
                <span className='user-row__title'>Username</span><span>{props.user.username}</span>
            </div>
            <div className='user-row'>
                <span className='user-row__title'>Role</span><span>{props.user.role}</span>
            </div>
        </div>
    );
};

export default User;