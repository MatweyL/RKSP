

const get_user_id_from_token = (token) => {
    const user_id = Number(token.split('_')[0]);
    console.log("extracted id", user_id)
    return user_id;
}

const get_role_from_token = (token) => {
    if (token) {
        return token.split('_')[1];
    }
    return null;
}


module.exports = {
    get_user_id_from_token,
    get_role_from_token
};