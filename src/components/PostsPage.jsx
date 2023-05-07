import PostForm from "./PostForm";
import PostsList from "./PostsList";
import React, {useEffect, useState} from "react";
import {createPost, deletePost, getPosts} from "../services/posts";

const PostsPage = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        })
    }, []);

    const addPost = (post) => {
            createPost(post).then(created_post => {
                setPosts([...posts, created_post]);
            });
    };

    const removePost = (post) => {
        deletePost(post).then(data => {
            setPosts(posts.filter(p => p.id !== post.id));
        });

    };

    return (<div>
                <PostForm token={props.token} createPost={addPost}/>
                {
                    posts.length !== 0 ? <PostsList token={props.token} removePost={removePost} posts={posts}/> :
                    <div style={{textAlign: 'center', marginTop: '10px'}}>Здесь пока нет постов.</div>
                }
            </div>
);
};



export default PostsPage;
