import { Typography } from '@material-ui/core';
import LoginForm from '../components/LoginForm';
const LoginPage = () => {
    return (
        <>
            <Typography variant="h2" component="h2">
                Login
            </Typography>
            <Typography paragraph>Login to create a game</Typography>
            <LoginForm />
        </>
    );
};

export default LoginPage;
