import {
    AppBar,
    Button,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Link, useHistory, withRouter } from 'react-router-dom';

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
}));

const TopBar = () => {
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
                    <Button
                        variant="text"
                        onClick={() => history.push('/login')}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(TopBar);
