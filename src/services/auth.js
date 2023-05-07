const API_URL = 'http://localhost:3001/users';


const getUser = (user) => {
    console.log(JSON.stringify(user));
    return fetch(API_URL,
        {
            method: "POST",
            body: JSON.stringify(user),
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


module.exports = {
    getUser
};
