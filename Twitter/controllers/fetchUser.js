const userDetailsConfig = {
    "api": {
        "uri": `https://twitter154.p.rapidapi.com/user/details?username=`,
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': 'b990dd46camsh37f2a7fcf8d9db2p1a7b44jsna9b6c7a63d0a',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    }
}
async function getUserDetails(username) {
    const url = `${userDetailsConfig.api.uri}${username}`;
    console.log(url);
    const options = {
        method: userDetailsConfig.api.method,
        headers: userDetailsConfig.api.headers
    };
    const response = await fetch(url, options);
    return addClientGeneratedProperties(await response.json());
};
function addClientGeneratedProperties(data) {
    data.twitter_link = `https://twitter.com/${data.username}`;
    return data;
}