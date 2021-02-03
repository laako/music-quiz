import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiUtils from '../api/api';
import UserContext from '../context/UserContext';
import { UserContextType } from '../models/user';

const HomePage: React.FC = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);

    const createGame = () => {
        setLoading(true);
        ApiUtils.post('/room/create')
            .then((res) => {
                console.log(res);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Typography paragraph>
                Create a new game (requires login) or join an existing game
            </Typography>
            <Box mb={1}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={createGame}
                    disabled={!user}
                >
                    {loading ? (
                        <CircularProgress color="secondary" size={24} />
                    ) : (
                        'Create game'
                    )}
                </Button>
            </Box>
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('/join')}
                >
                    Join game
                </Button>
            </Box>
        </>
    );
};

export default HomePage;
