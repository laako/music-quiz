import { Button, TextField } from '@material-ui/core';

const LoginForm = () => {
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(e);
        // const { username, password } = e.target.elements;
        // console.log(username, password)
    };

    return (
        <form onSubmit={submit}>
            <TextField name="username" label="Username" variant="outlined" />
            <TextField
                name="password"
                type="password"
                label="Username"
                variant="outlined"
            />
            <Button color="primary" type="submit" variant="contained">
                Submit
            </Button>
        </form>
    );
};

export default LoginForm;
