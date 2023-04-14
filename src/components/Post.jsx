import React from "react";

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
                    <button onClick={() => props.removePost(props.post)} className='button button-delete'>Delete</button>
                </div>
        </div>
    );
};

export default Post;