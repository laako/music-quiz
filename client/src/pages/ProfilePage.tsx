import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext, useState, useEffect } from 'react';
import ApiUtils from '../api/api';
import UserContext from '../context/UserContext';
import { UserContextType } from '../models/user';
import { RoomType } from '../models/room';
import { Redirect } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const { user, setUser } = useContext(UserContext) as UserContextType;
    const [rooms, setRooms] = useState<Array<RoomType>>([]);

    const logout = async () => {
        await ApiUtils.post('/user/logout').then((res) => {
            setUser(null);
        });
    };

    const deleteRoom = async (roomcode: string) => {
        await ApiUtils.post(`/room/destroy/${roomcode}`).then((res) => {
            setRooms((prev) =>
                prev.filter((room) => room.roomcode !== roomcode),
            );
        });
    };

    useEffect(() => {
        ApiUtils.get('/room').then((res) => {
            setRooms(res);
        });
    }, []);

    if (!user) return <Redirect to="/login" />;

    return (
        <>
            <Typography variant="h2" component="h2">
                You
            </Typography>
            <Typography paragraph>{`Username: ${user.username}`}</Typography>
            <Typography variant="h2" component="h2">
                Your rooms
            </Typography>
            <List>
                {rooms.map((room) => (
                    <ListItem key={room.roomcode}>
                        <ListItemText primary={room.roomcode} />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => {
                                    deleteRoom(room.roomcode);
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h2" component="h2">
                Actions
            </Typography>
            <Button
                color="primary"
                variant="contained"
                onClick={() => logout()}
            >
                Logout
            </Button>
        </>
    );
};

export default ProfilePage;
