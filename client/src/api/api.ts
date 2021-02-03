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

const ApiUtils = {
    async get(url: string, data: object) {
        return await fetch(url, {
            ...options,
            method: 'GET',
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .catch((err) => {
                throw new Error(err);
            });
    },
    async post(url: string, data?: object) {
        return await fetch(url, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data),
        }).then((res) => res.json());
    },
};

export default ApiUtils;
