import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';

const JoinGameForm = () => {
    const [roomcode, setRoomcode] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username && roomcode) {
            console.log('jes');
        } else {
            console.log('not jes');
        }
    };

    return (
        <form onSubmit={submit}>
            <TextField
                name="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                name="roomcode"
                label="Roomcode"
                variant="outlined"
                value={roomcode}
                onChange={(e) => setRoomcode(e.target.value)}
            />
            <Button color="primary" type="submit" variant="contained">
                Submit
            </Button>
        </form>
    );
};

export default JoinGameForm;
