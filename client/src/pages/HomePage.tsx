import { Box, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const HomePage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <Typography paragraph>
                Create a new game (requires login) or join an existing game
            </Typography>
            <Box mb={1}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('create')}
                    disabled
                >
                    Create game
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
