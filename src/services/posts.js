const API_URL = 'http://localhost:3001/posts'

const getPosts = () => {
    return fetch(API_URL)
        .then((response) => {
            return response.json().then((data) => {
                return  data;
            }).catch((err) => {
                console.log('error', err);
            })
        });
};


const createPost = (post) => {
    console.log(JSON.stringify(post));
    return fetch(API_URL,
        {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            return response.json().then((data) => {
                return data;
            }).catch((err) => {
                console.log('error', err);
            })
        });
};

const deletePost = (post) => {
    return fetch(API_URL,
        {
            method: "DELETE",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            return response.json().then((data) => {
                return  data;
            }).catch((err) => {
                console.log('error', err);
            })
        });
};


module.exports = {
    getPosts,
    createPost,
    deletePost: deletePost
};