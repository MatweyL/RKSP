import React from "react";
import User from "./User";
const UsersList = ({users, ...props}) => {
    return (
        <div className='users-list'>
                {users.map((user) =>
                    <User user={user} key={user.id}/>
                )}
        </div>
    );
};

export default UsersList;