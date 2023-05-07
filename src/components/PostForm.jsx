import React, {useState}  from "react";
import {get_user_id_from_token} from "../services/utils";

const PostForm = ({createPost, ...props}) => {
    const [post, setPost] = useState({title: '', 
                                    description: ''});
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
            user_id: get_user_id_from_token(props.token)
        };
        createPost(newPost);
        };
    return (
        <section className='post-creation-section'>
            <form className='post-creation-form'>
                <input onChange={e => setPost({...post, title: e.target.value})} type="text" className='input simple-input' required/>
                <textarea onChange={e => setPost({...post, description: e.target.value})} type="text" className='input simple-textarea' required/>
                <button onClick={addNewPost} className='button button-create'>Create</button>
            </form>
        </section>
    );
};

export default PostForm;