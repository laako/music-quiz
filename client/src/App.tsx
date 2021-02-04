import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';
import TopBar from './components/TopBar';

import UserContext from './context/UserContext';
import RoomPage from './pages/RoomPage';
import RoomContext from './context/RoomContext';
import { UserType } from './models/user';
import { RoomType } from './models/room';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#000',
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
        },
        h2: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                width: '100%',
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
                marginBottom: '1rem',
                '&:last-child': {
                    marginBottom: '0',
                },
            },
        },
    },
});

const App: React.FC = () => {
    const [user, setUser] = useState<UserType | null>(null);
    const [room, setRoom] = useState<RoomType | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <RoomContext.Provider value={{ room, setRoom }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <TopBar />
                        <Container maxWidth="sm">
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/join" component={JoinPage} />
                                <PrivateRoute
                                    path="/profile"
                                    component={ProfilePage}
                                />
                                <Route path="/room/:id" component={RoomPage} />
                                <Route path="*" component={NotFoundPage} />
                            </Switch>
                        </Container>
                    </BrowserRouter>
                </ThemeProvider>
            </RoomContext.Provider>
        </UserContext.Provider>
    );
};

export default App;
