import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { useContext } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import ApiUtils from '../api/api';
import UserContext from '../context/UserContext';
import { UserContextType } from '../models/user';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '1rem',
    },
    title: {
        flexGrow: 1,
        '& .link': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    button: {
        width: 'auto',
    },
}));

const TopBar = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const history = useHistory();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h1" className={classes.title}>
                        <Link to="/" className="link">
                            Musavisa
                        </Link>
                    </Typography>
                    {!user ? (
                        <Button
                            className={classes.button}
                            variant="text"
                            onClick={() => history.push('/login')}
                        >
                            Login
                        </Button>
                    ) : (
                        <Button
                            className={classes.button}
                            variant="text"
                            onClick={() => history.push('/profile')}
                        >
                            Profile
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(TopBar);
