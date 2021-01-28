// disable prettier
const options = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
};

const ApiUtils = {
    async login(credentials) {
        return await fetch('/user/login', {
            ...options,
            method: 'POST',
            body: JSON.stringify(credentials),
        })
            .then((res) => res.json())
            .catch((err) => {
                // TODO: Create error handler
                console.log(err);
                return null;
            });
    },
    async createUser(credentials) {
        return await fetch('/user', {
            ...options,
            method: 'POST',
            body: JSON.stringify(credentials),
        })
            .then((res) => res.json())
            .catch((err) => {
                // TODO: Create error handler
                console.log(err);
                return null;
            });
    },
    logout({ username, token }) {},
    async post(url, data) {
        return await fetch(url, {
            ...options,
            method: 'POST',
            body: data ? JSON.stringify(data) : undefined,
        })
            .then((res) => res.json())
            .catch((err) => {
                // TODO: Create error handler
                console.log(err);
                return null;
            });
    },
    async get(url, data) {
        return await fetch(url, {
            ...options,
            body: data ? JSON.stringify(data) : undefined,
        })
            .then((res) => res.json())
            .catch((err) => {
                // TODO: Create error handler
                console.log(err);
                return null;
            });
    },
};

export default ApiUtils;
