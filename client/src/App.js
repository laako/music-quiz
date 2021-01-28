import { useEffect } from 'react';
import ApiUtils from './api/apiUtilities';
import io from 'socket.io-client';

const App = () => {
    const asd = async () => {
        const lul = await ApiUtils.login({
            username: 'Saku',
            password: 'nakki',
        });
        console.log(lul);
    };

    const usd = async () => {
        const lel = await ApiUtils.createUser({
            username: 'Saku',
            password: 'nakki',
        });
        console.log(lel);
    };

    const createRoom = async () => {
        const lel = await ApiUtils.post('/room/create');
        console.log(lel);
    };

    const getRoom = async () => {
        const lel = await ApiUtils.get('/room/0N02');
        console.log(lel);
    };

    useEffect(() => {
        const socket = io();
        socket.on('connection', () => {
            console.log('Hello world');
        });
    }, []);

    return (
        <div className="App">
            <p>Hello world</p>
            <button onClick={asd}>Login</button>
            <button onClick={usd}>Create</button>
            <button onClick={createRoom}>Create room</button>
            <button onClick={getRoom}>Get room</button>
        </div>
    );
};

export default App;
