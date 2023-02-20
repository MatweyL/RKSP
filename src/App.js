import './App.css'
import React, {useState} from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([{title: 'Ученье свет', 
                                    description: 'Обретение нужных знаний - шаг навстречу к своей цели.', 
                                    id: Date.now()}]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };    

  return (
    <div className="App">
        <PostForm createPost={createPost}/>
        {posts.length !== 0 ? <PostsList removePost={deletePost} posts={posts}/>
        : <div style={{textAlign: 'center', marginTop: '10px'}}>Здесь пока нет постов.</div>}
        
    </div>
  );
}

export default App;
