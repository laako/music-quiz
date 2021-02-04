import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiUtils from '../api/api';
import RoomContext from '../context/RoomContext';
import UserContext from '../context/UserContext';
import { UserContextType } from '../models/user';
import { RoomContextType } from '../models/room';

const HomePage: React.FC = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const { setRoom } = useContext(RoomContext) as RoomContextType;
    const history = useHistory();
    const [loading, setLoading] = useState<boolean>(false);

    const createGame = () => {
        setLoading(true);
        ApiUtils.post('/room/create').then((res) => {
            if (res.roomcode) {
                setRoom(res);
                history.push(`/room/${res.roomcode}`);
            }
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
                    disabled={!user || loading}
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
