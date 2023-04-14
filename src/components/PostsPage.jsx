import PostForm from "./PostForm";
import PostsList from "./PostsList";
import React, {useState} from "react";

const PostsPage = (props) => {
    const [posts, setPosts] = useState([{title: 'Ученье свет',
        description: 'Обретение нужных знаний - шаг навстречу к своей цели.',
        id: Date.now()}]);

    const createPost = (post) => {
        setPosts([...posts, post]);
    };

    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (<div>
                <PostForm createPost={createPost}/>
                {
                    posts.length !== 0 ? <PostsList removePost={deletePost} posts={posts}/> :
                    <div style={{textAlign: 'center', marginTop: '10px'}}>Здесь пока нет постов.</div>
                }
            </div>
);
};

export default PostsPage;
