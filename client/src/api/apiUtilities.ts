// disable prettier
const options: any = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer',
};

type credentials = {
    username: string;
    password: string;
};

const ApiUtils = {
    async login(credentials: credentials) {
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
    async createUser(credentials: credentials) {
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
    async post(url: string, data: object) {
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
    async get(url: string, data: object) {
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
