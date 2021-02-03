import { Button, CircularProgress, TextField } from '@material-ui/core';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import ApiUtils from '../api/api';
import UserContext from '../context/UserContext';
import { UserContextType } from '../models/user';

const LoginForm = () => {
    const { user, setUser } = useContext(UserContext) as UserContextType;
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
                .then((res) => {
                    setUser(res);
                })
                .catch((err) => {});
        } else {
            setSubmitting(false);
        }
    };

    if (user) return <Redirect to="/" />;

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
