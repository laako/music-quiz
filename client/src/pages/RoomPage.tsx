import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import RoomContext from '../context/RoomContext';
import { RoomContextType } from '../models/room';
type MatchParams = {
    id: string;
};

const RoomPage = (props: RouteComponentProps<MatchParams>) => {
    const { room } = useContext(RoomContext) as RoomContextType;

    if (!room) return <Redirect to="/" />;
    return (
        <>
            <Typography
                variant="h2"
                component="h2"
            >{`Room: ${props.match.params.id}`}</Typography>
        </>
    );
};

export default RoomPage;
