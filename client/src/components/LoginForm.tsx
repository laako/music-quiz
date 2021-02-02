import { Button, CircularProgress, TextField } from '@material-ui/core';
import { useState } from 'react';

import ApiUtils from '../api/api';

const LoginForm = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        if (username && password) {
            ApiUtils.post('/user/login', {
                username,
                password,
            })
                .then((res) => {})
                .catch((err) => {});
        } else {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={submit}>
            <TextField
                name="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button color="primary" type="submit" variant="contained">
                {submitting ? (
                    <CircularProgress color="secondary" size={24} />
                ) : (
                    'Login'
                )}
            </Button>
        </form>
    );
};

export default LoginForm;
