import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            console.log('jes');
        } else {
            console.log('not jes');
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
                Submit
            </Button>
        </form>
    );
};

export default LoginForm;
