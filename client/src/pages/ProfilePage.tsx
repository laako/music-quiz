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

const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext) as UserContextType;
    const [rooms, setRooms] = useState<Array<any>>([]);

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

    return (
        <>
            <Typography variant="h2" component="h2">
                You
            </Typography>
            <Typography paragraph>{`Username: ${user.username}`}</Typography>
            <Button color="primary" variant="contained" onClick={logout}>
                Logout
            </Button>
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
        </>
    );
};

export default ProfilePage;
