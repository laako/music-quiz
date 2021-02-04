import { Typography } from '@material-ui/core';
import JoinGameForm from '../components/JoinGameForm';

const JoinPage: React.FC = () => {
    return (
        <>
            <Typography variant="h2" component="h2">
                Join game
            </Typography>
            <Typography paragraph>Write username and roomcode</Typography>
            <JoinGameForm />
        </>
    );
};

export default JoinPage;
