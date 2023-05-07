const API_URL = 'http://localhost:3001/users';


const getUsers = () => {
    return fetch(API_URL,
        {
            method: "GET",
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
    getUsers
};
