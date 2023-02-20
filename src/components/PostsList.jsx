import React, {useState}  from "react";
import Post from "./Post";

const PostsList = ({posts, ...props}) => {

    return (
        <section className='posts-section'>
            <h3 className='posts-section__title'>Посты</h3>
            <div className='posts-container'>
                {posts.map((post) => 
                    <Post removePost={props.removePost} post={post} key={post.id}/>
                    )} 
            </div>
      </section>
    );
};

export default PostsList;