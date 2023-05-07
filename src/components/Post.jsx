import React from "react";
import {get_role_from_token, get_user_id_from_token} from "../services/utils";

const Post = (props) => {

    return (
        <div className='post'>
                <div className='post__header'>
                    <strong>{props.post.title}</strong>
                </div>
                <div className='post__content'>
                    <div className='text'>{props.post.description}</div>
                </div>
                <div className='post__actions'>
                    {get_role_from_token(props.token) === 'admin' || get_user_id_from_token(props.token) === props.post.user_id ?
                        <button onClick={() => props.removePost(props.post)} className='button button-delete'>Delete</button>
                        : <div>Пост другого пользователя (id: {props.post.user_id})</div>
                    }

                </div>
        </div>
    );
};

export default Post;